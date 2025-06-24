const roadSigns = [
  { name: "No Entry", file: "images/noentry.webp", function: "Vehicles are not allowed to enter." },
  { name: "No U-Turn", file: "images/no-u-turn.webp", function: "U-turns are prohibited here." },
  { name: "No Overtaking", file: "images/no-overtaking.webp", function: "Do not overtake vehicles in this zone." },
  { name: "Roundabout", file: "images/roundabout.webp", function: "Prepare to yield in a circular junction." },
  { name: "Slippery Road", file: "images/slipperyroad.webp", function: "Slippery surface, drive with caution." },
  { name: "Two-Way Traffic", file: "images/twowaytraffic.webp", function: "Oncoming traffic exists ahead." },
  { name: "Uneven Road", file: "images/unevenroad.webp", function: "Bumpy road ahead." },
  { name: "Low Flying Aircraft", file: "images/lowflyingaicraft.webp", function: "Watch out for low-flying planes." },
  { name: "Falling Rocks", file: "images/fallingrocks.webp", function: "Rocks may fall from hillsides." },
  { name: "Crosswinds", file: "images/crosswinds.webp", function: "Strong side winds may affect vehicles." },
  { name: "Pedestrian Crossing", file: "images/pedestriancrossing.webp", function: "Give way to pedestrians here." },
  { name: "Cattle Crossing", file: "images/cattlecrossing.webp", function: "Expect animals on the road." },
  { name: "Steep Ascent", file: "images/steepascent.webp", function: "Steep uphill grade ahead." },
  { name: "Steep Descent", file: "images/steepdescent.webp", function: "Steep downhill grade ahead." },
  { name: "Traffic Signal Ahead", file: "images/trafficsignahead.webp", function: "Signalized junction coming." },
  { name: "Stop", file: "images/stopsign.webp", function: "You must come to a complete stop." },
  { name: "Yield", file: "images/yield.webp", function: "Give way to other vehicles." },
  { name: "No Horn", file: "images/no-horn.webp", function: "Horn usage is not permitted here." },
  { name: "Width Limit", file: "images/widthlimitsign.webp", function: "Vehicles wider than limit are not allowed." },
  { name: "Height Limit", file: "images/height-limit-.webp", function: "Vehicles taller than limit are prohibited." },
  { name: "Weight Limit", file: "images/axle-load-limit-160739.webp", function: "Heavy vehicles are restricted." },
  { name: "No Parking", file: "images/noparking.webp", function: "Parking is not allowed in this zone." },
  { name: "No Stopping", file: "images/nostopping.png.png", function: "Stopping is forbidden here." },
  { name: "Railroad Crossing", file: "images/ungarded-level-crossing.webp", function: "Train tracks cross this road." },
  { name: "Dangerous Curve", file: "images/curveroad.webp", function: "Sharp turn ahead, reduce speed." },
  { name: "Children Crossing", file: "images/children-crossing.webp", function: "Watch out for children crossing the road." },
  { name: "School Zone", file: "images/schoolzone.webp", function: "Drive slowly, school ahead." },
  { name: "Construction Zone", file: "images/constructionzone.webp", function: "Road work ahead, proceed with caution." },
  { name: "Bridge Narrows", file: "images/roadnarrows.webp", function: "The bridge ahead is narrow." },
  { name: "Traffic Cameras", file: "images/trafficcameras.webp", function:"There are speed cameras ahead." },
    ];

const container = document.getElementById("signGrid");

roadSigns.forEach((sign, i) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div>
      <h3>${sign.name}</h3>
      <img src="${sign.file}" alt="${sign.name}" />
      <button onclick="toggleFunction('func-${i}')">Show Function</button>
      <p class="function" id="func-${i}" style="display:none;">${sign.function}</p>
    </div>
  `;

  container.appendChild(card);
});

function toggleFunction(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}