import Header from "@/components/main/Header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
