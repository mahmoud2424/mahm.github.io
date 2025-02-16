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
     document.getElementById("message").innerText = "تهانينا! هذا هو الـ QR Code الخاص بك:";
     document.getElementById("qrCode").src = "Q.png";
     document.getElementById("qrCode").style.display = "block";
     
     // إظهار الرابط
     document.getElementById("qrLink").style.display = "inline"; // يظهر الرابط عند الإجابة الصحيحة
} else {
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
}
