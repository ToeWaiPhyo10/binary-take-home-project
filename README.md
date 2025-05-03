# Binary Take Home Project

This is a social media application built with Next.js 15 that allows users to create, read, update posts and interact with them through likes.

## Technical Stack

- **Framework**: Next.js 15 (App Router)

  - While the original requirement specified Next.js 12, I opted for Next.js 15 due to better documentation, improved features, and long-term maintainability.

- **State Management & Caching**:

  - [Zustand](https://zustand-demo.pmnd.rs/) - For global state management
  - [React Query](https://tanstack.com/query/latest) - For server state management and caching

- **UI Components**:

  - [shadcn/ui](https://ui.shadcn.com/) - For beautiful and accessible UI components
  - [Tailwind CSS](https://tailwindcss.com/) - For styling

- **Type Safety**:
  - TypeScript - For type safety and better developer experience

## Key Features

- **Custom Scroll Restoration**: Implemented a custom scroll restoration mechanism since Next.js 15's built-in scroll restoration wasn't working as expected
- **Infinite Scroll**: For efficient loading of posts
- **Real-time State Updates**: Using Zustand for immediate UI updates
- **Optimistic Updates**: For likes and post modifications
- **Toast Notifications**: For better user feedback

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ToeWaiPhyo10/binary-take-home-project.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/             # Next.js app router pages
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/            # Utility functions and configurations
├── services/       # API service functions
├── store/          # Zustand store definitions
└── types/          # TypeScript type definitions
```

## Technical Decisions

1. **Next.js 15 over 12**:

   - Better documentation and community support
   - Improved performance and features
   - Better TypeScript integration

2. **Custom Scroll Restoration**:

   - Implemented due to issues with Next.js 15's built-in scroll restoration
   - Uses a custom hook to maintain scroll position

3. **Zustand + React Query**:
   - Zustand for simple and efficient global state management
   - React Query for server state caching and automatic background updates
