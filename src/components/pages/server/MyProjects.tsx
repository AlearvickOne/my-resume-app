import { ID_MY_PROJECTS } from "@/components/pages/ids-pages";
import { ProjectBlogOrg } from "@/components/client-components/my-projects-components/project-blog-org";
import { SectionWrapper } from "@/components/wrappers";

export function MyProjects() {
  return (
    <SectionWrapper idDOM={ID_MY_PROJECTS}>
      <div className="">
        <h2 className="text-3xl font-semibold text-teal-400 mb-6">Мой проект</h2>

        <ProjectBlogOrg />
      </div>
    </SectionWrapper>
  );
}
