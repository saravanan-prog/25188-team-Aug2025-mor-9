  export default function Conditon() {
    
    
  const age=25; 
  const isEligibleToVote = age >=18;

  return (
    <div>
      <div className="heading">
        <h1> Voter Age Eligibility </h1>
      </div>

      <div className="simpleifstatment">
        <h3> Simple if condition : </h3>
        {isEligibleToVote && <p> You are eligibility to vote </p>}
      </div>

      <div className="ternaryOperator">
        <h3> Ternary Operator : </h3>

        {isEligibleToVote ?(
          <p> You are eligibility to vote.</p>
        ) : (
          <p>  You are not eligibility to vote.You must be at least 18 years old</p>
        )}
      </div>
    </div>
   

    
  );
}
