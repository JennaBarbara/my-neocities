export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="flex min-h-screen items-center justify-center bg-linear-to-t from-cyan-200 to-sky-500">
    <main className="grid grid-cols-1 md:grid-cols-5 min-h-screen w-full max-w-4xl content-start py-10 px-4 bg-blue-50/50 gap-x-2 gap-y-4">
      {children}
    </main>
  </div>
  );
}