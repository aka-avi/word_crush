window.addEventListener('load', init);


//initialising high score and getting it form local storage
let hscore = localStorage.getItem("highscore");
document.querySelector('#highscore').innerHTML = hscore;

//setting up variables
let time = 5;
let score = 0;
let isPlaying;

//accessing dom elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//array of words
const words = [ 'emerge', 'ashtray', 'baetyl', 'graniteware', 'met', 'unadjoining', 'nightingale', 'overorganpast', 'overlord', 'nipissing', 'complicative', 'ervin', 'lwe', 'engrosser', 'albigenses', 'apneustic', 'irritable', 'unmaker', 'erline', 'nonendurable', 'unsaddle', 'aristides', 'habilitated', 'prenecessitate', 'hypothecary', 'volatile', 'infusing', 'caseating', 'cauda', 'thermogenetic', 'approving', 'seferis', 'sympathetical', 'costate', 'karoo', 'fusula', 'superelegancy', 'dervishhood', 'rezoned', 'icteric', 'unobnoxious', 'bifilar', 'exfoliative', 'anchusa', 'numbles', 'archesporium', 'unjesting', 'bernoullian', 'dugout', 'metabiotic', 'cooeed', 'install', 'daughter', 'coyly', 'aclaurin', 'nonvenous', 'landskip', 'laically', 'umbellated', 'unexhorted', 'magistery', 'sculptor', 'sinking', 'urinalysis', 'equatable', 'fer', 'okovango', 'huddle', 'underteach', 'puriform', 'lupine', 'spasmodism', 'karyomitome', 'unhubristic', 'thundering', 'quadrumanous', 'crasher', 'lemonish', 'factual', 'musicality', 'waistband', 'erythematic', 'mallia', 'obeid', 'germproof', 'truckage', 'unstereotyped', 'hounding', 'gotthard', 'hydroquinone', 'devocalized', 'phrenologist', 'lvos', 'mesne', 'khitmatgar', 'pseudogaseous', 'drachma', 'disboweling', 'muskegon', 'humanizer', 'shotted', 'overmerrily', 'heathiest', 'undisguised', 'henrik', 'alta', 'octant', 'committeewomen', 'abbreviation', 'bend', 'surpass', 'westminster', 'uncheapened', 'uninitialled', 'siphonal', 'unabrogated', 'interfluent', 'imbecility', 'choosable', 'phenomenized', 'sprung', 'unenquiring', 'remain', 'unproffered', 'supplantation', 'subarea', 'preballot', 'backsplicing', 'foreseeability', 'disfigure', 'asafetida', 'waterfowl', 'glib', 'naxalite', 'uningratiating', 'echovirus', 'subcaptaincy', 'yardstick', 'hostile', 'beaconless', 'immunization', 'kindle', 'resurge', 'taillight', 'ceremonialist', 'ambit', 'lichenised', 'bagpiping', 'noncandescence', 'meshuggana', 'horsefish', 'hindi', 'ettabeth', 'gobbing', 'erasing', 'reviewable', 'blindage', 'preimportant', 'inerasableness', 'sachemship', 'schynbald', 'wiclif', 'starveling', 'unfungible', 'spoon', 'trivialising', 'reshaving', 'craftwork', 'anakim', 'steam', 'soprano', 'sunburn', 'moji', 'pistol', 'gliming', 'regrater', 'axiologist', 'kweisui', 'logship', 'reconverge', 'udal', 'patriclinous', 'preadvertised', 'theanthropist', 'laterigrade', 'nonperformer', 'khafre', 'attribute', 'framing', 'inviolableness', 'seizable', 'sievelike', 'toughy', 'penciling', 'langrage', 'ileocecal', 'dislodge', 'nicknamed', 'conclusive'];


//initialise game
function init(){
	//loading word from array
	showWord(words);

	//start matching word input
	wordInput.addEventListener('input', startMatch)
	
	//call countdown every second
	setInterval(countdown, 1000);
	
	//check game status
	setInterval(checkStatus, 50);
}

//pick and show random words
function showWord(words) {
	//generate random array index
	const randIndex = Math.floor(Math.random() * words.length);
	
	//output random word
	currentWord.innerHTML = words[randIndex];
}

//start match
function startMatch(){
	if(matchWords()){
		isPlaying = true;
		time = 6;
		showWord(words);
		wordInput.value ='';
		score++;
	
		//saving highscore in localstorage
		if(score > hscore){
			hscore = score;
			localStorage.setItem("highscore", hscore);
		}
	}
	
	if(score === -1){
		scoreDisplay.innerHTML = 0;
	}else{
		scoreDisplay.innerHTML = score;
	}
}

//match current words
function matchWords(){
	if(wordInput.value === currentWord.innerHTML){
			message.innerHTML ='correct';
			return true;
	}else{
		message.innerHTML = '';
		return false;
	}
}

//countdown timer
function countdown(){
	//make sure time is left
	if(time > 0){
		//decrement time
		time--;
	}else if(time === 0){
		//game is over
		isPlaying = false;
	}

	//showing time 
	timeDisplay.innerHTML = time;
}

//checking game status
function checkStatus(){
	if(!isPlaying && time == 0){
		message.innerHTML = 'Game Over!!!';
		document.querySelector('button').style.display = 'block';
		score = -1;
	}
}

//to resart the game
function myfun(){
	location.reload();
}