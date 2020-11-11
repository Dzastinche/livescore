let matches=[]
let comp=[]
let Today=new Date()
let year=Today.getFullYear();
let day=Today.getDate();
let mjesec=Today.getMonth()+1
if (day<10){
	day="0"+day;
}
//Fetching information

const proxy='https://shrouded-temple-39982.herokuapp.com/';
fetch(`${proxy}https://api.football-data.org/v2/matches?dateFrom=${year}-${mjesec}-${day+8 }&dateTo=${year}-${mjesec}-${day+10}`,
{
	"method": "GET",
		"headers": {
		"X-Auth-Token": "2a9c900328554726a0d0122a381955a5",
	}})
.then(e=>e.json())
.then(er=>{
	console.log(er)
	matches.push(er.matches)
	return matches})
//Destructing Competition

.then(e=>{
	for(let i=0;i<e[0].length;i++){
		comp.push(e[0][i].competition)
	}
	return matches
})
const Teams=(t)=>{
	//ELements
	let team=document.createElement('div')
	team.className='container-match-result-first';
	team.innerText=t.homeTeam.name
	let team2=document.createElement('div')
	team2.className='container-match-result-seccond'
	team2.innerText=t.awayTeam.name;
	//Check length
	if(team.innerText.length>16){
		team.innerText=team.innerText.substring(0,15)+ "...";
		team.classList.add('lower')
	} else{
		team.innerText.length>15?team.classList.add('lower'):team.classList.remove('lower')
	}
	if(team2.innerText.length>16){
		team2.innerText=team.innerText.substring(0,15)+ "...";
		team2.classList.add('lower')
	} else{
		team2.innerText.length>15?team.classList.add('lower'):team2.classList.remove('lower')
	}
	let result1=document.createElement('span');
	result1.innerHTML=t.score.fullTime.homeTeam
	let result2=document.createElement('span')
	result2.innerHTML=t.score.fullTime.awayTeam
// Time ELement
	let time=document.createElement('span')
	time.className='time';
	let timeOfMatch=new Date(t.utcDate)
	let hours=timeOfMatch.getHours();
	let minutes=timeOfMatch.getMinutes()
	minutes==0?minutes="00":minutes;
	time.innerText=hours+":"+minutes;
	let spans=document.createElement('span')

	spans.className='versus'
	spans.innerHTML=result1.outerHTML + '  vs  ' + result2.outerHTML;
	let finnaly=document.createElement('div')
	finnaly.className="container-match-result"
	finnaly.innerHTML=team.outerHTML + spans.outerHTML +time.outerHTML +team2.outerHTML;
	return finnaly
}
// Create Competition item
const Comp=(competitions)=>{
	const li=document.createElement('li');
	li.className='container-match';
	const head=document.createElement('div')
	head.className='container-head';
	let img=document.createElement('img');
	img.src=`${competitions.area.ensignUrl}`;
	let league=document.innerText = competitions.name;
	head.innerHTML= img.outerHTML +league +img.outerHTML;
	const lista=document.createElement('ul'); 
	lista.append(head,li)
	const rezultat=document.createElement('div');
	rezultat.className='container-item'
	rezultat.appendChild(lista);
	document.querySelector('#container UL').appendChild(rezultat)
			for(let j=0;j<matches[0].length;j++)
			{
				
				if(matches[0][j].competition.id===competitions.id){
					li.appendChild(Teams(matches[0][j]))
				}}
		
}

	setTimeout(
		()=>{
			let check=[];
			for(let i=0;i<comp.length;i++)
			{if(check.includes(comp[i].id)){
				null
			}
			else{
				Comp(comp[i])
			 };
			check.push(comp[i].id)
			}
			comp.length>0?loader.classList.add('hidden'):loader.classList.remove('hidden')
		}
		,2000)
let loader=document.getElementById('load')

