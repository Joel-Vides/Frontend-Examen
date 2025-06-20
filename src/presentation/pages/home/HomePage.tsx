import { Earth, PersonStanding, PersonStandingIcon, User } from "lucide-react"
import { Title } from "../../components/shared/Title"
import { DashboardCard } from "../../components/home/DashBoardCard"
import { Loader } from "../../components/shared/Loader"
import { useStatistics } from "../../hooks/useStatistics"

export const HomePage = () => {

  const { data, isLoading } = useStatistics();

  // const [data, setData] = useState();

  if (isLoading) {
    return <Loader />
  }

  console.log(data);


  // const response = await countsAction();
  return (
    <div>
      <Title text="Página de Inicio" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DashboardCard
          title="Países"
          to="/countries/create"
          countValue={data?.data?.countriesCount || 0}
          icon={<Earth size={48} />}
        />

        <DashboardCard
          title="Personas"
          to="/persons/create"
          countValue={data?.data?.personsCount || 0}
          icon={<PersonStanding size={48} />}
        />

        <DashboardCard
          title="Roles"
          to="/roles/create"
          countValue={data?.data?.roleCount || 0}
          icon={<User size={48} />}
        />

      </div>

    </div>
  )
}
