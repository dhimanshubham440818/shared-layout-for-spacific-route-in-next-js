export default function RootLayout({ children }) {
    return (
      <div>
        <body>
        <nav>put here common layout for Dashboard route or child route of Dashboard</nav>
            {children}
            </body>
      </div>
    )
  }
  