import PageTitle from 'ui/components/data-display/Page-Title'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/index'

export default function Home() {
  return (
    <>
      <title>e-diaristas</title>
      <div>
        <SafeEnvironment />
        <PageTitle
          title={'Conheça os profissionais'}
          subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
        />
      </div>
    </>
  )
}