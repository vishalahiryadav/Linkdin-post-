const query: string | null = prompt("Write a phrase, please");

if (query) { // Check if query is not null
    alert(reverseWordsInSentence(query));
} else {
    alert("No input provided!");
}

export default function reverseWordsInSentence(sentence: string): string {
    if (sentence.length <= 1) {
        return sentence; // Return the input if it is a single character
    }
    const arrOfWords: string[] = sentence.split(' ');
    const reversedWords: string[] = arrOfWords.map((word) => word.split('').reverse().join(''));
    return reversedWords.join(' ');
}
