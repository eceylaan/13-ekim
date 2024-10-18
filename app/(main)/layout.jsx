import MainHeader from "@/components/main/Header";

export default function MainLayout({ children }) {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
}
