let attempts = 3;

function checkAnswers() {
    let answers = {
        puzzle1: "Hi",
        puzzle2: "Code",
        puzzle3: "DARE",
        puzzle4: "RATE",
        puzzle5: "11",
        puzzle6: "8",
        puzzle7: "10",
        puzzle8: "3",
        puzzle9: "10"
    };
    
    let allCorrect = true;
    for (let key in answers) {
        let userAnswer = document.getElementById(key).value.trim().toLowerCase();
        if (userAnswer !== answers[key].toLowerCase()) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        // إذا كانت الإجابات صحيحة
        document.getElementById("message").innerText = "تهانينا! هذا هو الـ QR Code الخاص بك:";
        document.getElementById("qrCode").style.display = "block";  // إظهار الصورة
        document.getElementById("qrLink").style.display = "inline"; // إظهار الرابط
    } else {
        // إذا كانت الإجابات خاطئة
        attempts--;
        document.getElementById("attempts").innerText = attempts;
        if (attempts <= 0) {
            alert("لقد استنفدت محاولاتك! سيتم إعادة تحميل الصفحة.");
            location.reload();
        } else {
            document.getElementById("message").innerText = "إجابة خاطئة! تبقى لك " + attempts + " محاولات.";
        }
    }
}
