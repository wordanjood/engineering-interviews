import { GetServerSideProps } from "next";
import { Users } from "@/components/pages/users";

interface HomeProps {
  userData: any;
}

export default function Home({ userData }: HomeProps) {
  return <Users userData={userData} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch(" https://api.github.com/users/AaronDMorris/repos");
    const data = await res.json();

    let userData = [];

    data.map((data) => {
      userData.push({
        name: data.name,
        url: data.url,
      });
    });

    return {
      props: {
        userData,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
