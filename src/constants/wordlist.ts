import {
  GradeNumber,
  loadGradeFromLocalStorage,
  saveGradeToLocalStorage,
} from '../lib/localStorage'

const gradeStatKey = 'gradeNumber'
const grade = localStorage.getItem(gradeStatKey)
const nogradeyet = ['error']

var GRADEWORDS = nogradeyet
const EIGHTGRADE = [
      'mary',
    'anna',
    'caroline',
    'marley',
    'will',
    'gerbi',
    'finn',
    'layla',
    'hannah',
    'margaret',
    'hayes',
    'lilly',
    'aj',
    'ryder',
    'daniel',
    'andrew',
    'dean',
    'carter',
    'john',
    'jackson',
    'william',
    'hunter',
'mitchell',
    'emmy',
    'grace',
    'andriana',
    'meriwether',
    'ray',
    'jack',
    'george',
    'harley',
    'sasha',
    'amara',
    'eva',
    'paige',
    'sophia',
    'braiden',
    'ella',
    'davis',
    'leah',
    'makayla',
    'caroline',
    'ryder',
    'grant',
    'scarlett',
    'chase',
    'christina',
    'connor',
    'maddie',
    'edmond',
    'graham',
    'olivia',
    'mcvey',
    'sophia',
    'alexa',
    'havana',
    'tyler',
    'taylor',
    'sienna',
    'lilliana',
    'betsy',
    'avery',
    'mose',
    'sam',
    'logan',
    'margot',
    'elizabeth',
    'knox',
    'nick',
    'sean',
    'annabelle',
    'ella',
    'tyson',
    'claire',
    'garrett',
    'ansley',
    'robbie',
    'kadence',
    'sophie',
    'jones',
    'gavin',
    'tommy',
    'garret',
    'grayson',
    'grace',
    'sarah',
    'greyson',
    'ria',
    'camellia',
    'colt',
    'will',
    'daniel',
    'brent',
    'charlie',
    'maxx',
    'amelia',
    'claire',
    'avalina',
    'blair',
    'kattie',
    'preston',
    'kamran',
    'nora',
    'john',
    'franklin',
    'jon',
    'emma',
    'teagan',
    'bryce',
    'collier',
    'jules',
    'sophia',
    'eliana',
    'juliana',
    'nessa',
    'philip',
    'kenzo',
    'brooke',
    'emma',
    'beatrice',
    'tuck',
    'luke']

const SEVENGRADE= ['presley','liam','violet','sarah','grayden','lucy','cristiano','alexa','jake','lucas','prakhar','athena','ayden','william','sloane','perry','mia','tristen','davis','crosby','hugh','gailyn','sophia','jackson','logan','cathryn-rose','brayden','mary','isabel','sam','jack','ronan','isabella','elizabeth','lane','sovereign','caroline','samantha','joshua','laura','daniel','daniel','emma','ryan','ryan','turner','wyatt','connor','cole','julia','zoe','isabell','william','vivienne','emily','samuel','patrick','sara','peighton','jay','shane','emerson','hudson','colton','caroline','ryan','riley','edward','cole','addison','coleman','lucas','molly','tenzin','bennett','lydia','gemma','madison','keith','aubrey','strickland','mary','makenzie','chase','charles','eva','ingrid','robert','adair','bryce','henry','divyalakshmi','ellison','andrew','gaines','nicholas','landon','lucas','madeleine','ava','eden','treasure','merrick','xavier','madeline','jude','garrett','richard','joseph','whitney','william','bailey','thomas','bree','james','mary-grace','miller']


if (grade == null){
  var GRADEWORDS = nogradeyet
} else if(grade == '"69"'){
  console.log("nah thats crazy ")
} else if(grade == '"25"'){
  var GRADEWORDS = EIGHTGRADE
} else if(grade == '"7"'){
  var GRADEWORDS = SEVENGRADE
}else if(grade == '"8"'){
  var GRADEWORDS = EIGHTGRADE
} else{
  var GRADEWORDS = nogradeyet
  
}
export const WORDS = GRADEWORDS
