import CardLayout from "./CardLayout";
export default function ProfileCard() 
{
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Profile Card Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <CardLayout
            name="Sharukh Khan"
            role="ACTOR"
            image="https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/SRKheader1-322x215.jpg"
          />
        </div>

        <div className="col-md-4">
          <CardLayout
            name="Katrina Kaif"
            role="ACTRESS"
            image="https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/katrina-kaif_02-322x215.jpg"
          />
        </div>

        <div className="col-md-4">
          <CardLayout
            name="Deepika Padukone"
            role="ACTRESS"
            image="https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/depupadu-322x215.jpg"
          />
        </div>
      </div>
    </div>
  );
}
