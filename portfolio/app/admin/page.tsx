import ProjectForm from "@/components/forms/ProjectForm";
import ProjectList from "@/components/lists/ProjectList";
import ExperienceForm from "@/components/forms/ExperienceForm";
import ExperienceList from "@/components/lists/ExperienceList";
import EducationForm from "@/components/forms/EducationForm";
import EducationList from "@/components/lists/EducationList";

export default function AdminPage() {
  return (
    <main className="p-10 space-y-12">
      <section>
        <h2 className="text-xl font-bold mb-4">Projets</h2>
        <ProjectForm />
        <ProjectList />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Expériences</h2>
        <ExperienceForm />
        <ExperienceList />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Éducation</h2>
        <EducationForm />
        <EducationList />
      </section>
    </main>
  );
}
