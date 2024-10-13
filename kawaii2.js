var inflection = [
	[/(あ|お|わ)c<ぅ(う|ー|)>I/g,'お$2'],
	[/(か|こ)c<ぅ(う|ー|)>I/g,'こ$2'],
	[/(が|ご)c<ぅ(う|ー|)>I/g,'ご$2'],
	[/(さ|そ)c<ぅ(う|ー|)>I/g,'そ$2'],
	[/(ざ|ぞ)c<ぅ(う|ー|)>I/g,'ぞ$2'],
	[/(た|と)c<ぅ(う|ー|)>I/g,'と$2'],
	[/(だ|ど)c<ぅ(う|ー|)>I/g,'ど$2'],
	[/(な|の)c<ぅ(う|ー|)>I/g,'の$2'],
	[/(は|ほ)c<ぅ(う|ー|)>I/g,'ほ$2'],
	[/(ば|ぼ)c<ぅ(う|ー|)>I/g,'ぼ$2'],
	[/(ぱ|ぽ)c<ぅ(う|ー|)>I/g,'ぽ$2'],
	[/(ま|も)c<ぅ(う|ー|)>I/g,'も$2'],
	[/(や|よ)c<ぅ(う|ー|)>I/g,'よ$2'],
	[/(ら|ろ)c<ぅ(う|ー|)>I/g,'ろ$2'],
	[/(し|じ)C<ぅ(う|ー|)>I/g,'$1ゅ$2'],
	[/<(あ|ぁ)>([aAiIYTPuUeEo]|<(する|くる)>)/g,'$2<$1>'],
	[/[cC]<ぅ(う|ー|)>I/g,'$1'],
	[/<ぅ(う|ー|)>/g,''],

	[/(か|こ)c<ぇ(え|ぇ|ー|)>[IuU]/g,'け$2'],
	[/(が|ご)c<ぇ(え|ぇ|ー|)>[IuU]/g,'げ$2'],
	[/(さ|そ)c<ぇ(え|ぇ|ー|)>[IuU]/g,'せ$2'],
	[/(ざ|ぞ)c<ぇ(え|ぇ|ー|)>[IuU]/g,'ぜ$2'],
	[/(た|と)c<ぇ(え|ぇ|ー|)>[IuU]/g,'て$2'],
	[/(だ|ど)c<ぇ(え|ぇ|ー|)>[IuU]/g,'で$2'],
	[/(な|の)c<ぇ(え|ぇ|ー|)>[IuU]/g,'ね$2'],
	[/(は|ほ)c<ぇ(え|ぇ|ー|)>[IuU]/g,'へ$2'],
	[/(ば|ぼ)c<ぇ(え|ぇ|ー|)>[IuU]/g,'べ$2'],
	[/(ぱ|ぽ)c<ぇ(え|ぇ|ー|)>[IuU]/g,'ぺ$2'],
	[/(ま|も)c<ぇ(え|ぇ|ー|)>[IuU]/g,'め$2'],
	[/(や|よ)c<ぇ(え|ぇ|ー|)>[IuU]/g,'え$2'],
	[/(ら|ろ)c<ぇ(え|ぇ|ー|)>[IuU]/g,'れ$2'],
	[/C<ぇえ>[IuU]/g,'い'],
	[/C<ぇぇ>[IuU]/g,'ぃ'],
	[/C<ぇー>[IuU]/g,'ー'],
	[/<ぇ(え|ぇ|ー|)>/g,''],

	[/<(で|ま)す>U<(ー|〜)>/g,'$1$2す'],
	[/<ます>A<ず><ん>U<(ー|〜)>/g,'ませ$1ん'],
	[/(し|じ)C<(ー|〜)>[aIT]/g,'$1$2く'],
	[/(し|じ)C<(ー|〜)>[uU]/g,'$1$2'],
	[/c<(ー|〜)>[aIT]/g,'$1く'],
	[/c<(ー|〜)>[uU]/g,'$1い'],
	[/R<(ー|〜)>E/g,'$1い'],
	[/[w]<(ー|〜)>[u]/g,'$1'],
	[/<(ー|〜)>(U|E)/g,'$2$1'],
	[/<(ー|〜)>/g,''],

	[/<です><(ッ|っ|)(す|ス)>P/g,'$1しP'],
	[/<です><(ッ|っ|)(す|ス)>([uU])/g,'$1$2$3'],
	[/<です><(ッ|っ|)(す|ス)>o/g,'$1しょo'],
	[/<する><す>[uU]/g,'す'],
	[/<(ッ|っ|)(す|ス)>/g,''],

	[/[cCk]<ゃ>e/g,'きゃ'],
	[/g<ゃ>e/g,'ぎゃ'],
	[/[sS]<ゃ>e/g,'しゃ'],
	[/[zZd]<ゃ>e/g,'じゃ'],
	[/t<ゃ>e/g,'ちゃ'],
	[/n<ゃ>e/g,'にゃ'],
	[/h<ゃ>e/g,'ひゃ'],
	[/b<ゃ>e/g,'びゃ'],
	[/p<ゃ>e/g,'ぴゃ'],
	[/m<ゃ>e/g,'みゃ'],
	[/[rl]<ゃ>e/g,'りゃ'],
	[/ゅ[yw]<ゃ>e/g,'ゃ'],
	[/[yw]<ゃ>e/g,'や'],
	[/<する><ゃ>e/g,'すりゃ'],
	[/<くる><ゃ>e/g,'くりゃ'],
	[/<来る><ゃ>e/g,'来りゃ'],
	[/<ゃ>/g,''],

	[/[cC]<し>[iT]/g,'かり'],
	[/しC<し>U/g,'し'],
	[/じC<し>U/g,'じ'],
	[/[cC]<し>U/g,'し'],
	[/[cC]<し>u/g,'き'],
	[/<し>/g,''],

	[/S<る>[uU]/g,'する'],
	[/S<る>e/g,'すれ'],
	[/S<る>[EO]/g,'せよ'],
	[/Z<る>[uU]/g,'ずる'],
	[/Z<る>e/g,'ずれ'],
	[/Z<る>[EO]/g,'ぜよ'],
	[/<る>/g,''],

	[/l<ぃ>E/g,''],
	[/(れl|r)<ん>a/g,'ん'],
	[/[lrR]<ん>u/g,'ん'],
	[/<(する|さ|でき)><ん>u/g,'すん'],
	[/<ず><ん>[uU]/g,'ん'],
	[/l<っ>a/g,'っ'],
	[/<(ぃ|ん|っ)>/g,''],

	[/[cC]a/g,'く'],
	[/[cC]A/g,'から'],
	[/[cC]i/g,'くあり'],
	[/[cC]I/g,'く'],
	[/[cC]Y/g,''],
	[/[cC]T/g,'く'],
	[/[cC]P/g,'かっ'],
	[/[cC][uU]/g,'い'],
	[/[cC]e/g,'けれ'],
	[/[cC][EO]/g,'かれ'],
	[/[cC]o/g,'かろ'],

	[/k[aA]/g,'か'],
	[/k[iIY]/g,'き'],
	[/k[TP]/g,'い'],
	[/k[uU]/g,'く'],
	[/k[eEO]/g,'け'],
	[/ko/g,'こ'],

	[/x[aA]/g,'か'],
	[/x[iIY]/g,'き'],
	[/x[TP]/g,'っ'],
	[/x[uU]/g,'く'],
	[/x[eEO]/g,'け'],
	[/xo/g,'こ'],

	[/g[aA]/g,'が'],
	[/g[iIY]/g,'ぎ'],
	[/g[TP]/g,'い"'],
	[/g[uU]/g,'ぐ'],
	[/g[eEO]/g,'げ'],
	[/go/g,'ご'],

	[/s[aA]/g,'さ'],
	[/s[iIY]/g,'し'],
	[/s[TP]/g,'し'],
	[/s[uU]/g,'す'],
	[/s[eEO]/g,'せ'],
	[/so/g,'そ'],

	[/t[aA]/g,'た'],
	[/t[iIY]/g,'ち'],
	[/t[TP]/g,'っ'],
	[/t[uU]/g,'つ'],
	[/t[eEO]/g,'て'],
	[/to/g,'と'],

	[/n[aA]/g,'な'],
	[/n[iIY]/g,'に'],
	[/n[TP]/g,'ん"'],
	[/n[uU]/g,'ぬ'],
	[/n[eEO]/g,'ね'],
	[/no/g,'の'],

	[/h[aA]/g,'は'],
	[/h[iIY]/g,'ひ'],
	[/h[TP]/g,'う'],
	[/h[uU]/g,'ふ'],
	[/h[eEO]/g,'へ'],
	[/ho/g,'ほ'],

	[/b[aA]/g,'ば'],
	[/b[iIY]/g,'び'],
	[/b[TP]/g,'ん"'],
	[/b[uU]/g,'ぶ'],
	[/b[eEO]/g,'べ'],
	[/bo/g,'ぼ'],

	[/m[aA]/g,'ま'],
	[/m[iIY]/g,'み'],
	[/m[TP]/g,'ん"'],
	[/m[uU]/g,'む'],
	[/m[eEO]/g,'め'],
	[/mo/g,'も'],

	[/r[aA]/g,'ら'],
	[/r[iIY]/g,'り'],
	[/r[TP]/g,'っ'],
	[/r[uU]/g,'る'],
	[/r[eEO]/g,'れ'],
	[/ro/g,'ろ'],

	[/R[aA]/g,'ら'],
	[/R[iY]/g,'い'],
	[/RI/g,'り'],
	[/R[TP]/g,'っ'],
	[/R[uU]/g,'る'],
	[/Re/g,'れ'],
	[/RE/g,'い'],
	[/Ro/g,'ろ'],

	[/w[aA]/g,'わ'],
	[/w[iIY]/g,'い'],
	[/w[TP]/g,'っ'],
	[/w[uU]/g,'う'],
	[/w[eEO]/g,'え'],
	[/wo/g,'お'],

	[/v[aA]/g,'わ'],
	[/v[iIY]/g,'い'],
	[/v[TP]/g,'う'],
	[/v[uU]/g,'う'],
	[/v[eEO]/g,'え'],
	[/vo/g,'お'],

	[/<くる>[aAO]/g,'こ'],
	[/<くる>[iIY]/g,'き'],
	[/<くる>[TP]/g,'き'],
	[/<くる>[uU]/g,'くる'],
	[/<くる>e/g,'くれ'],
	[/<くる>E/g,'こい'],
	[/<くる>o/g,'こよ'],

	[/<来る>[aAO]/g,'来'],
	[/<来る>[iIYTP]/g,'来'],
	[/<来る>[uU]/g,'来る'],
	[/<来る>e/g,'来れ'],
	[/<来る>E/g,'来い'],
	[/<来る>o/g,'来よ'],

	[/@<(する|でき)>Y_/g,'_'],
	[/<(する|でき)>a/g,'し'],
	[/<さ>a/g,'さ'],
	[/<(する|さ|でき)>A/g,'せ'],
	[/<(する|さ|でき)>[iIYTP]/g,'し'],
	[/<(する|さ|でき)>[uU]/g,'する'],
	[/<(する|さ)>e/g,'すれ'],
	[/<でき>e/g,'でき'],
	[/<(する|さ|でき)>E/g,'しろ'],
	[/<(する|さ|でき)>o/g,'しよ'],
	[/<(する|さ|でき)>O/g,'せよ'],

	[/SY_/g,'_'],
	[/S[aA]/g,'さ'],
	[/S[iIYTP]/g,'し'],
	[/S[uU]/g,'す'],
	[/S[eEO]/g,'せ'],
	[/So/g,'そ'],

	[/ZY_/g,'_'],
	[/Za/g,'じ'],
	[/ZA/g,'ぜ'],
	[/Z[iIYTP]/g,'じ'],
	[/Z[uU]/g,'じる'],
	[/Ze/g,'じれ'],
	[/Z[EO]/g,'ぜよ'],
	[/Zo/g,'じよ'],

	[/l[aA]/g,''],
	[/l[iIYTP]/g,''],
	[/l[uU]/g,'る'],
	[/le/g,'れ'],
	[/lE/g,'ろ'],
	[/l[oO]/g,'よ'],

	[/<(な|に|の|だ|ね)>a/g,'で'],
	[/<(な|に|の|だ|ね)>A/g,'なら'],
	[/<(な|に|の|だ|ね)>i/g,'であり'],
	[/<(な|の|だ|ね)>I/g,'で'],
	[/<に>I/g,'に'],
	[/<(な|に|の|だ|ね)>Y/g,''],
	[/<(な|に|の|だ|ね)>T/g,'"'],
	[/<(な|に|の|だ|ね)>P/g,'だっ'],
	[/<(な|に|の|だ)>U/g,'だ'],
	[/<ね>[uU]/g,''],
	[/<(な|に)>u/g,'な'],
	[/<の>u/g,'の'],
	[/<だ>u/g,'である'],
	[/<(な|に|の|だ|ね)>e/g,'なら'],
	[/<(な|に|の|だ|ね)>[EO]/g,'なれ'],
	[/<(な|に|の|だ|ね)>o/g,'だろ'],

	[/<や>a/g,'や'],
	[/<や>A/g,'やら'],
	[/<や>i/g,'やっ'],
	[/<や>I/g,'や'],
	[/<や>Y/g,''],
	[/<や>[TP]/g,'やっ'],
	[/<や>[uU]/g,'や'],
	[/<や>[eEO]/g,'やれ'],
	[/<や>o/g,'やろ'],

	[/<です>a/g,'で'],
	[/<です>A/g,'でありませ'],
	[/<です>i/g,'であり'],
	[/<です>I/g,'で'],
	[/<です>Y/g,''],
	[/<です>[TP]/g,'でし'],
	[/<です>[uU]/g,'です'],
	[/<です>[eEO]/g,'でありませ'],
	[/<です>o/g,'でしょ'],

	[/<ます>a/g,'もうさ'],
	[/<ます>A/g,'ませ'],
	[/<ます>[iIYTP]/g,'まし'],
	[/<ます>[uU]/g,'ます'],
	[/<ます>e/g,'ませ'],
	[/<ます>[EO]/g,'ませ'],
	[/<ます>o/g,'ましょ'],

	[/<た>a/g,'て'],
	[/<た>A/g,'たら'],
	[/<た>[iIYTP]/g,'て'],
	[/<た>[uU]/g,'た'],
	[/<た>e/g,'たら'],
	[/<た>E/g,'てろ'],
	[/<た>o/g,'たろ'],
	[/<た>o/g,'たれ'],

	[/<う>[aAo]/g,'う'],
	[/<う>[iIYTP]/g,'う'],
	[/<う>[uU]/g,'う'],
	[/<う>[eEO]/g,'う'],

	[/<ず>a/g,'ざら'],
	[/<ず>A/g,'ざら'],
	[/<ず>i/g,'ざり'],
	[/<ず>I/g,'ず'],
	[/<ず>T/g,'ざり'],
	[/<ず>P/g,'ざり'],
	[/<ず>U/g,'ず'],
	[/<ず>u/g,'ぬ'],
	[/<ず>e/g,'ね'],
	[/<ず>E/g,'ざれ'],
	[/<ず>o/g,'ざろ'],

	[/<き>a/g,'せ'],
	[/<き>A/g,'せ'],
	[/<き>i/g,'けり'],
	[/<き>I/g,'けり'],
	[/<き>T/g,'しかっ'],
	[/<き>P/g,'しかっ'],
	[/<き>U/g,'き'],
	[/<き>u/g,'し'],
	[/<き>e/g,'しか'],
	[/<き>E/g,'けれ'],
	[/<き>o/g,'けろ'],

	[/([あぁかがさざただなはぱばまらやゃわ]);?<ぁ>/g,'$1ぁ'],
	[/([いぃきぎしじちぢにひぴびみり]);?<ぁ>/g,'$1ぃ'],
	[/([うぅくぐすずつづぬふぷぶむるゆゅ]);?<ぁ>/g,'$1ぅ'],
	[/([えぇけげせぜてでねへぺべめれ]);?<ぁ>/g,'$1ぇ'],
	[/([おぉこごそぞとどのほぽぼもろよょ]);?<ぁ>/g,'$1ぉ'],
	[/([あぁかがさざただなはぱばまらやゃわ]);?<あ>/g,'$1あ'],
	[/([いぃきぎしじちぢにひぴびみり]);?<あ>/g,'$1い'],
	[/([うぅくぐすずつづぬふぷぶむるゆゅ]);?<あ>/g,'$1う'],
	[/([えぇけげせぜてでねへぺべめれ]);?<あ>/g,'$1え'],
	[/([おぉこごそぞとどのほぽぼもろよょ]);?<あ>/g,'$1お'],
	[/<(あ|ぁ)>/g,''],
];

var allKana = {
	'ぁ':1,'あ':1,'ぃ':1,'い':1,'ぅ':1,'う':1,'ぇ':1,'え':1,'ぉ':1,'お':1,'か':1,'が':1,'き':1,'ぎ':1,'く':1,'ぐ':1,'け':1,'げ':1,'こ':1,'ご':1,'さ':1,'ざ':1,'し':1,'じ':1,'す':1,'ず':1,'せ':1,'ぜ':1,'そ':1,'ぞ':1,'た':1,'だ':1,'ち':1,'ぢ':1,'っ':1,'つ':1,'づ':1,'て':1,'で':1,'と':1,'ど':1,'な':1,'に':1,'ぬ':1,'ね':1,'の':1,'は':1,'ば':1,'ぱ':1,'ひ':1,'び':1,'ぴ':1,'ふ':1,'ぶ':1,'ぷ':1,'へ':1,'べ':1,'ぺ':1,'ほ':1,'ぼ':1,'ぽ':1,'ま':1,'み':1,'む':1,'め':1,'も':1,'ゃ':1,'や':1,'ゅ':1,'ゆ':1,'ょ':1,'よ':1,'ら':1,'り':1,'る':1,'れ':1,'ろ':1,'ゎ':1,'わ':1,'ゐ':1,'ゑ':1,'を':1,'ん':1,'ゔ':1,'ゕ':1,'ゖ':1,
};

function tokenizeClause(clause,limit) {
	if (limit <= 0) return null;
	var bestTokens = null;
	var bestEvaluation = Number.MAX_VALUE;
	for (var i = Math.max(0,clause.length-maxWordLength); i<clause.length; i++) {
		var word = clause.substr(i);
		var entry = dictionary[word];
		if (!entry) continue;
		if (!Array.isArray(entry)) entry = [entry];
		var previousWords = clause.substr(0,i);
		for (var j in entry) {
			var lastToken = entry[j];
			var stem = word.substr(0,word.length-1);
			if (lastToken===1) {
				lastToken = ','+stem;
			} else if (lastToken===2) {
				lastToken = ',~'+stem;
			} else {
				lastToken = lastToken.replace(/\*/,stem);
			}
			var conjugation = lastToken.charAt(0);
			var tokens = tokenizeClause(previousWords+conjugation,Math.min(limit,bestEvaluation)-1);
			if (!tokens) {
				if (conjugation==',' && lastToken!=',' || i>0 && word!=',' && conjugation=='_') {
					tokens = [previousWords?','+previousWords:''];
				} else {
					continue;
				}
			}
			tokens = tokens.concat(lastToken.split(/~/));
			var evaluation = tokens.length+1000*tokens[0].length;
			if (evaluation<bestEvaluation) {
				bestTokens = tokens;
				bestEvaluation = evaluation;
			}
		}
	}
	return bestTokens;
}

function tokenizeMain(input,limit) {
	var prefixes = {'お':1,'ご':1,'っ':1};
	var suffixes = {'ー':1,'〜':1};
	var punctuations = {',':1,';':1,':':1,'.':1};
	var output = '';
	var clause = '';
	var lastKana = null;
	for (var i = 0; i<input.length; i++) {
		var theChar = input.charAt(i);
		var punctuation = theChar in punctuations?theChar:null;
		if (theChar in allKana) {
			lastKana = theChar;
			clause += theChar;
		} else if (punctuation || (lastKana && !((clause.length<10 && lastKana in prefixes) || theChar in suffixes || (clause.length<=2 && input.charAt(i+1) in allKana)))) {
			var tokens = tokenizeClause(clause+(punctuation||','),limit);
			output += tokens?tokens.join(''):clause;
			if (punctuation) {
				output += punctuation;
				clause = '';
			} else {
				clause = theChar;
			}
			lastKana = null;
		} else {
			clause += theChar;
		}
	}
	return output+clause;
}

function escapeASCII(input,alpha) {
	var output = alpha?',':'';
	for (var i=0; i<input.length; i++) {
		output += '<'+input.charCodeAt(i)+'>';
	}
	return output;
}

function tokenize(text,limit) {
	text = text.replace(/([a-z_']+)|[-=.,:;%!?#&@~^()<>"\/]+/ig,escapeASCII);
	text = text.replace(/～/g,'〜');
	text = text.replace(/(ッ)*([。｡．！？‼⁇⁈⁉︎…｡\t\n]|<(33|46|63)>|$)/g,'.$&,');
	text = text.replace(/(ッ)*([」』】］）》”｣]|<(41|34)>)/g,'.$&');
	text = text.replace(/[、，・･　 ：；｀＇´「『【［（《“､｢]|<(3[458]|4[02347]|5[89]|6[012])>/g,':$&,');
	text = tokenizeMain(text,limit);
	text = text.replace(/-([a-zA-Z]|[@%](<.*?>)?|&(@<.*?>)?(P<た>)?)/g,'');
	text = text.replace(/<(な|に|の|だ|ね|です)>Y/g,'');
	return text;
}

function untokenize(text) {
	text = text.replace(/-([a-zA-Z]|[@%](<.*?>)?)/g,'');
	text = text.replace(/D/g,'T');
	text = text.replace(/B/g,'P');
	for (var i in inflection) {
		text = text.replace(inflection[i][0],inflection[i][1]);
	}
	text = text.replace(/\"た/g,'だ');
	text = text.replace(/\"ち/g,'じ');
	text = text.replace(/\"て/g,'で');
	text = text.replace(/\"と/g,'ど');
	text = text.replace(/[-=a-zA-Z.,:;_%!?#&@~^()"]/g,'');
	text = text.replace(/<\D+?>/g,'');
	text = text.replace(/<(\d+)>/g,function(s,a) {return String.fromCharCode(a)});
	return text;
}

function amendWord(word,token) {
	if (!word) return;
	if (!/[!-~]$/.test(word)) word = word+'_';
	if (/^[^!-~]|<.*?>/.test(token)) token = ','+token;
	var old = dictionary[word];
	if (!old || old===1) {
		dictionary[word] = token;
	} else if (Array.isArray(old)) {
		for (var i in old) {
			if (old[i]===1) {
				dictionary[word][i] = token;
				return;
			}
		}
		dictionary[word] = old.concat([token]);
	} else {
		dictionary[word] = [token,old];
	}
}

function amendDictionary(patch) {
	for (var word in patch) {
		amendWord(word,patch[word]);
	}
}

function amendInflection(patch) {
	var keys = Object.keys(patch);
	keys.sort(function(a,b){return a.length - b.length;});
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var value = patch[key];
		inflection.unshift([new RegExp(key,'g'),value]);
	}
}

