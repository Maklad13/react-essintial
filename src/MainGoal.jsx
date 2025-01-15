export const mainGoal = [
  { title: "Learn React", description: "In-depth" },
  {
    title: "career shift",
    description: "my main goal from learning react is to do career shift",
  },
];

export default function MainGoal({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
