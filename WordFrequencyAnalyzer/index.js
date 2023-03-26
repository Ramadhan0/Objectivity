/**
 * Create a function that reads a text input and outputs a list of unique words in the text,
 * along with their frequency count. The words should be sorted by frequency,
 * with the most frequent words appearing first.
 */
const wordFrequencyAnalyser = text => {
    // split the text into words
    const words = text.split(/\s+/);

    // create a Map to store the frequency count of each word
    const freqMap = new Map();
    for (const word of words) {
        const count = freqMap.get(word) || 0;
        freqMap.set(word, count + 1);
    }

    // sort the Map by frequency, with the most frequent words first
    const sortedFreq = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

    // return the sorted list of arrays
    return console.log(sortedFreq);
}

const exampleTest = "This is a sample text with several words to test frequency analyser. This is the second sentence just to increase the number of words.";
const freqList = wordFrequencyAnalyser(exampleTest);

/**
 * [
    [ 'This', 2 ],
    [ 'is', 2 ],
    [ 'to', 2 ],        
    [ 'the', 2 ],
    [ 'a', 1 ],         
    [ 'sample', 1 ],
    [ 'text', 1 ],      
    [ 'with', 1 ],
    [ 'several', 1 ],   
    [ 'words', 1 ],
    [ 'test', 1 ],      
    [ 'frequency', 1 ],
    [ 'analyser.', 1 ], 
    [ 'second', 1 ],
    [ 'sentence', 1 ],  
    [ 'just', 1 ],
    [ 'increase', 1 ],  
    [ 'number', 1 ],
    [ 'of', 1 ],        
    [ 'words.', 1 ]
]
 */
