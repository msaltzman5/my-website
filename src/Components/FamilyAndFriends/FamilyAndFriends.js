import "./FamilyAndFriends.css";
// import Box from '@mui/material/Box';

function FamilyAndFriends() {
  return (
    <div id='family-and-friends' className='content family-and-friends-content'>
      {/* <Box id="family-and-friends-box" sx={{ p: 2, borderRadius: 4, bgcolor: '#DFABFD', display: "flex" }}> */}
        <div className="left-family-and-friends">
          <h1 className="family-and-friends-heading">Family & Friends</h1>
          <div className="family-content">
            <h1>Family</h1>
            <p>
              This is my mom, dad, and younger sister. My sister and I are 4 and half years apart. My parents lived in Lincoln, NE
              when they had me and we moved out to Malcolm, NE when I was about 2 years old. So me growing up in a town that 
              has the same name as me is a total coincidence. (INSERT FAMILY PICTURE)
            </p>
          </div>
          <div className="friends-content">
            <h1>Friends</h1>
            <p>
              I love hanging out with my girlfriend and friends I've made over the years. It would be impossible for me to include
              everyone so I apologize if you're reading this and you aren't included, but I will try to make an album of friends I
              have pictures with.  
            </p>
          </div>
          <div className="bowling-club-content">
            <h1>Bowling Club</h1>
            <p>
              This is a team picture of the bowling club I'm involved in at UNL. I picked up bowling just before starting college
              and the members at the time were super inviting to me. I make it my goal to be inviting as possible and conduct the
              duties of the officer positions I have been elected to. We end up spending a lot of time together so it's great that
              everyone is super nice and all aiming towards the same goal: to win tournements.
            </p>
          </div>
        </div>
      {/* </Box> */}
    </div>
  )
}

export default FamilyAndFriends;