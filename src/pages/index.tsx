import React from "react";
import PageTitle from "ui/components/data-display/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/index";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Gabriel"}
        rating={3}
        picture={"https://github.com/GabrielSaliba.png"}
        description={"Belo Horizonte  "}
      ></UserInformation>
    </div>
  );
}
