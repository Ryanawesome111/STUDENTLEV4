import {
  GradeNumber,
  loadGradeFromLocalStorage,
  saveGradeToLocalStorage,
} from '../lib/localStorage'

const gradeStatKey = 'gradeNumber'
const grade = localStorage.getItem(gradeStatKey)
const nogradeyet = ['Ryan']

var GRADEWORDS = nogradeyet
const EIGHTGRADE = [
'ashley',
'xavier',
'maryb',
'sam',
'andrew',
'bobby',
'madison',
'brayden',
'jake',
'joseph',
'madeline',
'strickland',
'ingrid',
'aaniyah',
'jackson',
'zoe',
'bennett',
'nicholas',
'william',
'cole',
'bailey',
'tenzin',
'keith',
'ronan',
'lucas',
'eden',
'bree',
'eva',
'vivienne',
'mackenzie',
'liam',
'jack',
'lane',
'hudson',
'thomas',
'akeelah',
'perry',
'ryan',
'edward',
'garrett',
'richard',
'gaines',
'wyatt',
'emma',
'bryce',
'grayden',
'emily',
'samuel',
'laura',
'elizabeth',
'lydia',
'davis',
'jay',
'samantha',
'isabella',
'sloane',
'violet',
'cathryn-rose',
'mary-grace',
'cristiano',
'whitney',
'addison',
'ellison',
'charles',
'peighton',
'isabell',
'julia-pun',
'crosby',
'gemma',
'sophia',
'daniel',
'hugh',
'isabel',
'alexa',
'merrick',
'landon',
'loriel',
'charlie',
'ayden',
'emme',
'caroline',
'lucy',
'turner',
'joshua',
'Cole',
'grant',
'chase',
'ava',
'prakhar',
'mia',
'kaylee',
'riley',
'logan',
'jude',
'sarah',
'maddie',
'colt',
'ethan',
'divya',
]

const SEVENGRADE = [
'xavier',
'sophie',
'ben',
'graham',
'aaron',
'morgan',
'amzie',
'cole',
'krystin',
'natalie',
'blakely',
'jacob',
'henry',
'kate',
'robert',
'chris',
'byrdie',
'mason',
'fiver',
'sam',
'noah',
'kennedy',
'graham',
'zachary',
'ryan',
'sawyer',
'braeden',
'riley',
'khloe',
'hudson',
'cannon',
'harrison',
'mimi',
'liam',
'banks',
'david',
'ella',
'anna',
'matthew',
'alessandra',
'yovela',
'asher',
'joey',
'caroline',
'henry',
'vivienne',
'ellie',
'ridge',
'daniel',
'temma',
'colin',
'breanna',
'ellison',
'parks',
'emily',
'hill',
'joe',
'nicholas',
'trey',
'xavi',
'jaiden',
'lila',
'samantha',
'kaleb',
'annie',
'penny',
'alex',
'melina',
'owen',
'anna',
'emilie',
'amaya',
'bates',
'miller',
'jack',
'eve',
'harrison',
'liam',
'sophie',
'finley',
'sanders',
'hannah',
'fernando',
'hudson',
'mark',
'ireland',
'parker',
'auldyn',
'luke',
'camille',
'christian',
'isabelle',
'kennedy',
'alice',
'truman',
'anderson',
'ava',
'haiden',
'mack',
'henry',
]

const SIXGRADE = [
'tyler',
'ansley',
'abbey',
'emma',
'eidan',
'nathaniel',
'alaina',
'camille',
'talan',
'emma',
'brayden',
'john',
'chandler',
'vincent',
'cameron',
'robert',
'eli',
'john',
'elliot',
'ross',
'wilder',
'ethan',
'sydney',
'mary',
'spencer',
'liam',
'anna',
'abrielle',
'josiah',
'isabel',
'andrew',
'abigail',
'caroline',
'zachorie-saxon',
'noah',
'sam',
'anna',
'ella',
'katherine',
'megan',
'ridge',
'sloane',
'benjamin',
'ann',
'lauren',
'grayson',
'tillan',
'charles',
'connor',
'lukas',
'jace',
'yardley',
'timothy',
'aleksandra',
'whitfield',
'elizabeth',
'olivia',
'dylan',
'matthew',
'ruby',
'ryder',
'wesley',
'addison',
'mckenzie',
'mason',
'anna',
'allison',
'laney',
'andrew',
'william',
'hazel',
'thomas',
'henry',
'daniel',
'daria',
'nola',
'sandifer',
'lila',
'sophia',
'talia',
'iris',
'ava',
'casey',
'lukas',
'kamdyn',
'lanier',
'daley',
'drew',
'anna',
'robert',
'austin',
'jacqueline',
'ella',
'klyce',
'tyler',
'caroline',
'marlin',
'robert',
'harrison',
'michael',
'davis',
]

if (grade == null) {
  var GRADEWORDS = nogradeyet
} else if (grade == '"69"') {
  console.log('nah thats crazy ')
} else if (grade == '"25"') {
  var GRADEWORDS = EIGHTGRADE
} else if (grade == '"7"') {
  var GRADEWORDS = SEVENGRADE
} else if (grade == '"6"') {
  var GRADEWORDS = SIXGRADE
} else if (grade == '"8"') {
  var GRADEWORDS = EIGHTGRADE
} else {
  var GRADEWORDS = nogradeyet
}
export const WORDS = GRADEWORDS
