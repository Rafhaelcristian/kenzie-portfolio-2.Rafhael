import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
// import { HandEffect } from "../HandEffect";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="social-media">
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"70px"}
            height={"70px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              Sobre mim {/* <HandEffect /> */}
            </Text>
            <Text type="body1" color="grey2">
              Bem, sou formado em Agronomia pela UESB (Universidade Estadual do
              sudoeste da Bahia), mas no momento passo por uma transição de
              carreira. Sempre gostei de tecnologia, principalmente jogos e
              informática, e hoje em dia eu me encontrei na programação, estou
              indo pro 6 módulo, de um total de 6. Desenvolvo projetos FrontEnd
              utilizando: HTML5, CSS3, JavaScript ( DOM, JSON, API), TypeScript,
              como também algumas bibliotecas, react.js, zod, styled components,
              yup, axios, e utilizando web responsivo(mobile first) e figma. No
              BackEnd tenho noção de SQL utilizando, pg, pg-format, typeorm,
              express, python, django.
            </Text>
          </Box>
        </Flex>
        <Flex
          css={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "$2",
          }}
        >
          {/* <Button
            className="instagram"
            type="circle"
            as="a"
            target="_blank"
            href={`https://instagram.com/${userData.instagramUser}`}
          >
            <FaInstagram />
          </Button>
          <Button
            className="facebook"
            type="circle"
            as="a"
            target="_blank"
            href={`https://fb.com/${userData.facebookUser}`}
          >
            <FaFacebookF />
          </Button> */}
          <Button
            className="linkedin"
            type="circle"
            as="a"
            target="_blank"
            href={`https://linkedin.com/in/${userData.linkedinUser}`}
          >
            <FaLinkedinIn />
          </Button>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
