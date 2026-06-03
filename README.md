# AasaMedChem Project — Interview Preparation Guide

This document contains a detailed explanation of the technical decisions, architecture, and potential interview questions regarding the AasaMedChem Inventory and Order Management System you built.

---

## 1. System Architecture & Tech Stack

### Next.js 16 (App Router) & React
- **Why Next.js?** It provides a full-stack React framework. You utilized the App Router (`app/` directory) for clean file-based routing and Server Components for optimal performance and SEO.
- **Server Actions:** Instead of writing traditional API routes (`/api/...`), you used Next.js Server Actions (in `src/actions/`) to securely handle database mutations (like creating orders or updating products) directly from Server Components.

### Neon PostgreSQL & Drizzle ORM
- **Why Neon?** It is a serverless Postgres provider that separates storage and compute, meaning it spins up instantly, scales automatically, and pairs perfectly with edge-friendly frameworks like Next.js.
- **Why Drizzle ORM?** Drizzle is a lightweight, edge-compatible TypeScript ORM. Unlike Prisma, which relies on a heavy Rust binary engine, Drizzle translates exactly to SQL, giving you maximum control and zero cold-start penalties on Vercel.

### NextAuth.js v5 (Auth.js)
- **Authentication Strategy:** You used a stateless JWT (JSON Web Token) strategy. This means session data is securely stored in a cookie rather than looking up the database on every single request. This is extremely fast and scalable.
- **Role-Based Access Control (RBAC):** Users are assigned roles (`ADMIN`, `SELLER`, `BUYER`). The `src/middleware.ts` intercepts every request at the edge and checks the JWT role, instantly redirecting unauthorized users without ever hitting the main server.

---

## 2. The Core Challenge: Unit Conversion & Precision

The most complex requirement was handling multiple units (g, kg, mL, L, units) and calculating exact pricing.

### The "Base Unit" Strategy
- **Database Storage:** To avoid complex math across the application, you chose to normalize all data. In the database, every product is stored using its **smallest base unit** (e.g., grams for weight, milliliters for volume).
- **The Conversion Logic (`src/lib/units.ts`):** 
  - `toBaseUnit`: Converts user input (e.g., 2.5 kg) to base units (2500 g) before saving to the database.
  - `fromBaseUnit`: Converts database values (2500 g) back to display units (2.5 kg) for the UI.
- **Why is this good?** It makes the backend incredibly simple. The backend only ever deals with grams or milliliters. The frontend dynamically handles what the user sees based on their preference.

### Floating Point Math vs. Exact Precision
- **The Problem:** In JavaScript, `0.1 + 0.2 = 0.30000000000000004`. If you used standard numbers (Floats) for financial calculations or chemical inventory, you would eventually lose money or have stock discrepancies due to rounding errors.
- **The Solution:** In your PostgreSQL schema (`src/db/schema.ts`), you used `NUMERIC(20,6)` for `pricePerUnit`, `stock`, and `totalAmount`. This guarantees absolute exact precision up to 6 decimal places, which is crucial for chemical measurements and financial data.

---

## 3. Potential Interview Questions & Suggested Answers

**Q: Why did you choose Drizzle ORM over Prisma?**
> **A:** "While Prisma has a great developer experience, it relies on a heavy Rust engine which can cause cold-start delays in serverless environments like Vercel. Drizzle is much lighter, runs natively at the edge, and maps directly to SQL, which gives me better performance and deeper control over my queries."

**Q: How did you solve the unit conversion requirement?**
> **A:** "I used a Base-Unit Normalization strategy. Instead of storing whether an item is kg or g in the database and doing math everywhere, the database strictly stores everything in the smallest base unit (grams, milliliters, or units). The UI layer is entirely responsible for converting those base units into whatever the user wants to see (like converting 2000g to 2kg for display). This keeps the database and business logic extremely clean."

**Q: How are you protecting the Admin and Seller routes?**
> **A:** "I'm using Next.js Middleware paired with NextAuth v5. When a user logs in, their role (ADMIN, SELLER, BUYER) is securely encrypted into an HTTP-only JWT cookie. The middleware runs at the Edge before a page is even rendered. It reads this JWT, checks the requested route (e.g., `/admin`), and instantly redirects the user if they don't have the correct role. This is both highly secure and highly performant."

**Q: How do you ensure prices and stock don't suffer from floating-point rounding errors?**
> **A:** "JavaScript numbers are floating-point, which are notoriously bad for money and exact measurements. To prevent data corruption, I defined the database columns using PostgreSQL's `NUMERIC(20,6)` type instead of `FLOAT`. This ensures the database calculates and stores values with exact precision. On the frontend, I use dedicated parsing functions to format the numbers correctly before displaying them."

**Q: Tell us about the database schema for Orders.**
> **A:** "I normalized the order data into two tables: `orders` and `order_items`. The `orders` table tracks the high-level information (user ID, total amount, status). The `order_items` table links to the order and stores the specific products, the exact quantity purchased (in base units), and the locked-in price at the time of purchase. Storing the historical price is critical because if a product's price changes tomorrow, old orders must retain the price the user actually paid."

---

## 4. Summary of Your Strengths to Highlight
When talking to the recruiters or engineering team, make sure to emphasize:
1. **Security & Validation:** You used Middleware for edge-level route protection.
2. **Data Integrity:** You proactively thought about floating-point errors and used `NUMERIC(20,6)`.
3. **Clean Architecture:** You abstracted the complex unit math into a single helper file (`src/lib/units.ts`) rather than scattering `if/else` statements throughout your components.
4. **Modern Stack:** You leveraged the latest features of React 19 and Next.js 16 (Server Components, Server Actions).


