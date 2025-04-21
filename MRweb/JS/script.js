// JavaScript Document

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const resultDiv = document.getElementById('result');
    const nextClueDiv = document.getElementById('nextClue');
    
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    // 判断当前页面是哪个 quiz
    const isFoodQuiz = document.title.includes("Chinese Culture Quiz");
    const isRedEnvelopeQuiz = document.title.includes("Red Envelope");
    const isShanghaiQuiz = document.title.includes("Old Shanghai Quiz");
	const isWishingTreeQuiz = document.title.includes("Wishing Tree Quiz");

    if (isFoodQuiz && selectedOption.value === 'C') {
        resultDiv.innerHTML = '✅ <strong>Correct!</strong> Sharing food in China symbolizes expressing love and connection.';
        resultDiv.className = 'result correct';
        nextClueDiv.style.display = 'block';
    } 
    else if (isRedEnvelopeQuiz && selectedOption.value === 'B') {
        resultDiv.innerHTML = '✅ <strong>Correct!</strong> Red envelopes symbolize blessings for good fortune in Chinese culture.';
        resultDiv.className = 'result correct';
        nextClueDiv.style.display = 'block';
    } 
	else if (isShanghaiQuiz && selectedOption.value === 'B') {
    resultDiv.innerHTML = '✅ <strong>Correct!</strong> Rickshaws were used to transport people like taxis in old Shanghai.';
    resultDiv.className = 'result correct';
    nextClueDiv.style.display = 'block';
} 
	else if (isWishingTreeQuiz && selectedOption.value === 'C') {
    resultDiv.innerHTML = '✅ <strong>Correct!</strong> The wishing tree tradition represents sending hopes to the universe.';
    resultDiv.className = 'result correct';
    nextClueDiv.style.display = 'block';
} 
    else {
        // 错误反馈（根据页面不同显示不同提示）
        if (isFoodQuiz) {
            resultDiv.innerHTML = '❌ Not quite right. In Chinese culture, sharing food is more about emotional connection than ' + 
                                (selectedOption.value === 'A' ? 'showing off skills.' : 
                                 selectedOption.value === 'B' ? 'testing chopstick speed.' : 'diet balance.');
        } 
        else if (isRedEnvelopeQuiz) {
            resultDiv.innerHTML = '❌ Not quite right. Red envelopes are ' + 
                                (selectedOption.value === 'A' ? 'not about paying bills.' : 
                                 selectedOption.value === 'C' ? 'more meaningful than shopping coupons.' : 
                                 'not typically used for secret messages.');
        }
		else if (isShanghaiQuiz) {
    resultDiv.innerHTML = '❌ Not quite right. While rickshaws might have been used occasionally for ' + 
                        (selectedOption.value === 'A' ? 'carrying water,' : 
                         selectedOption.value === 'C' ? 'selling food,' : 
                         'festival activities,') + ' their primary purpose was transporting people.';

		}
		else if (isWishingTreeQuiz) {
    resultDiv.innerHTML = '❌ Not quite. While the act might involve ' + 
                        (selectedOption.value === 'A' ? 'memories,' : 
                         selectedOption.value === 'B' ? 'creative expression,' : 
                         'nature connection,') + ' its primary meaning is about sending intentions outward.';

		}
        resultDiv.className = 'result';
        nextClueDiv.style.display = 'none';
    }
    	
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}