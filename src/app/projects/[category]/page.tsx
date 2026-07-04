import { notFound } from "next/navigation";
import { categories, getCategoryById } from "@/data/projects";
import ProjectCategoryPage from "@/components/ProjectCategoryPage";

export function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) return { title: "Not Found" };
  return {
    title: `${cat.title} Projects | Sai Mahesh Nikhil`,
    description: cat.description,
  };
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) notFound();
  return <ProjectCategoryPage category={cat} />;
}
