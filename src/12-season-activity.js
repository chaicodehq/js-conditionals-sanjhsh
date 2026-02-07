/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
  // let seasonName=Object.fromEntries(
  //   ...["12","1","2"].map(k => [k,"Winter"]),
  //   ...["3","4","5"].map(k => [k,"Spring"]),
  //   ...["6","7","8"].map(m => [m,"Summer"]),
  //   ...["9","10","11"].map(n => [n,"Autumn"])
  // );
  let winter= [12,1,2], Spring=[3,4,5], Autumn=[9,10,11], Summer=[6,7,8];
  let season, activity;
  if (month>12 || month<=0){
    return null;
  }
  if (winter.includes(month)){
    season="Winter";
    if (temperature<0){
      activity ="skiing";  
    }
    else if (temperature>=0){
      activity ="ice skating" ;
    }
  }
  else if (Spring.includes(month)){
    season="Spring";
    if (temperature>20){
      activity ="hiking";
    }
    else if(temperature<=20){
      activity= "museum visit";
    }
  }
  else if (Summer.includes(month)){
    season="Summer";
    if (temperature>35){
      activity ="swimming";
    }
    else if(temperature<=35){
      activity ="cycling" ;
    }
  }
  else if (Autumn.includes(month)){
    season="Autumn";
    if (temperature>15){
      activity ="nature walk";
    }
    else if(temperature<=15){
      activity="reading at a cafe";
    }
    }
    return {season,activity};
}
  

      
      
