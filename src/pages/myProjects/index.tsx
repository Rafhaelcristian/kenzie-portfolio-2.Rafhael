// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

// Components
import { Project } from "@/components/Project";

// Data
import { userData } from "@/utils/userData";

// PageStylle
import {
  ProjectsArea,
  ProjectAreaWrapperColumns,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
} from "../home/style";

export const MyProjects = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  return (
    <main id="my_project">
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Mues projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus{" "}
                <Text as="span" color="brand5">
                  projetos paralelos
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
