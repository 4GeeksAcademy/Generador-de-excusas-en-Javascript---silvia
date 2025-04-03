window.onload = function() {
    
    let first = "A ";
    let adj = ["three-eyed ", "radioactive ", "furious ", "isolated ", "wild ", "luminous ", "stinky ", "sluggish ", "ancient "];
    let noun = ["sprinter ", "fox ", "wolf ", "trader ", "pilot ", "jester ", "acorn "];
    let action = ["grabbed my ", "flung my ", "screamed at my ", "shoved my ", "snatched my ", "scorched my ", "gnawed on my ", "slapped my "];
    let possetion = ["finger ", "bicycle ", "clock ", "boot ", "backpack ", "jacket ", "glasses ", "tablet ", "headphones ", "pizza "];
    let where = ["by the park", "inside my apartment", "in my backyard", "outside the café", "next to the supermarket", "near the sink", "at the train station"];
   
    let rdm1 = Math.floor(Math.random() * adj.length);
    let rdm2 = Math.floor(Math.random() * noun.length);
    let rdm3 = Math.floor(Math.random() * action.length);
    let rdm4 = Math.floor(Math.random() * possetion.length);
    let rdm5 = Math.floor(Math.random() * where.length);
  
    document.querySelector("#excuse").innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5];
    
  }