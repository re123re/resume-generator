const { jsPDF } = window.jspdf;

function onGeneratePdf() {
    const doc = new jsPDF();
    doc.setFont('Roboto-Light');

    doc.setFontSize(14);
    doc.text("Резюме", 10, 10);
    doc.line(10,20, 200, 20);
    //doc.save("resume.pdf");

    doc.setFontSize(14);
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value;
    const patronymic = document.getElementById("patronymic").value;
	
	doc.setFontSize(11);
    const position = document.getElementById("position").value;
    const email = document.getElementById("email").value;
    const employment = document.getElementById("employment").value;
    const schedule = document.getElementById("schedule").value;
    const post = document.getElementById("post").value;
    const assignment = document.getElementById("assignment").value;
	const number = document.getElementById("number").value;
    const personal = document.getElementById("personal").value;
    const city = document.getElementById("city").value;
    const crossing = document.getElementById("crossing").value;
    const citizenship = document.getElementById("citizenship").value;
    const gender = document.getElementById("gender").value;
    const birthdate = document.getElementById("birthdate").value;
    const maritalStatus = document.getElementById("maritalStatus").value;
    const flexCheckIndeterminate = document.getElementById("flexCheckIndeterminate").value;
	const educational = document.getElementById("educational").value;
    const institutio = document.getElementById("institutio").value;
    const faculty = document.getElementById("faculty").value;
    const specialty = document.getElementById("specialty").value;
    const finishYear = document.getElementById("finishYear").value;
    const educationType = document.getElementById("educationType").value;
	const experience = document.getElementById("experience").value;
    const workPeriod = document.getElementById("workPeriod").value;
    const appointment = document.getElementById("appointment").value;
    const organizationWork = document.getElementById("organizationWork").value;
    const obligation = document.getElementById("obligation").value;
	const courses = document.getElementById("courses").value;
    const training = document.getElementById("training").value;
    const organizationCoach = document.getElementById("organizationCoach").value;
    const completion = document.getElementById("completion").value;
	const addon = document.getElementById("addon").value;
    const languages = document.getElementById("languages").value;
    const drive = document.getElementById("").value;            //???????
    const skills = document.getElementById("skills").value;
    const personalQualities = document.getElementById("personalQualities").value;

    doc.text(lastName, firstName, patronymic, 82, 10);
    doc.text("Желаемая зарплата: " + position, 10, 82);
    doc.text("E-mail: " + email, 10, 96);
    doc.text("Занятость: " + employment, 10, 110);
    doc.text("График работы: " + schedule, 10, 124);
    doc.text("Должность: " + post, 82, 138);
    doc.text("Готовность к командировкам: " + assignment, 10, 152);
	doc.text("Телефон: " + number, 82, 40);
	doc.text(personal, 10, 171);
    doc.text("Город: " + city, 10, 188);
    doc.text("Переезд: " + crossing, 10, 202);
    doc.text("Гражданство: " + citizenship, 10, 216);
    doc.text("Пол: " + gender, 10, 230);
    doc.text("Дата рождения: " + birthdate, 10, 244);
    doc.text("Семейное положение: " + maritalStatus, 10, 258);
    doc.text("Есть дети: " + flexCheckIndeterminate, 10, 272);
	doc.text(educational, 10, 291);
    doc.text("Учебное заведение: " + institutio, 10, 308);
    doc.text("Факультет: " + faculty, 10, 322);
    doc.text("Специальность: " + specialty, 10, 336);
    doc.text("Год окончания: " + finishYear, 10, 350);
    doc.text("Форма обучения: " + educationType, 10, 364);
	doc.text(experience, 10, 383);
    doc.text("Период работы: " + workPeriod, 10, 400);
    doc.text("Должность: " + appointment, 10, 414);
    doc.text("Организация: " + organizationWork, 10, 428);
    doc.text("Должностные обязанности и достижения: ", 10, 442);
    doc.text(obligation, 10, 456);
	doc.text(courses, 10, 475);
    doc.text("Название курса: " + training, 10, 492);
    doc.text("Наименование организации: " + organizationCoach, 10, 506);
    doc.text("Год окончания: " + completion, 10, 520);
	doc.text(addon, 10, 539);
    doc.text("Знание иностранных языков: " + languages, 10, 556);
    doc.text("Водительские права (категории): " + drive, 10, 570); //????????
    doc.text("Ключевые навыки: " + skills, 10, 584);
    doc.text("Личные качества: ", 10, 598);
    doc.text(personalQualities, 10, 612);


    const ph = document.getElementById("photo");
    toBase64(ph.files[0]).then(function (value) {
        if (value) {
            doc.addImage(value, 'webp', 100, 25, 100, 100)
        }
        doc.output('dataurlnewwindow');
    }, function (reason) {
        console.log(reason); // Ошибка!
    });
};

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    } else {
        resolve(null);
    }
});

function onAddEducation() {
    Runtime.educationGroupCount++;
    const educationGroup = $('#educationGroup');

    const newEducationGroup = educationGroup.clone();
    newEducationGroup.attr('id', 'educationGroup' + Runtime.educationGroupCount);

    const institutio = newEducationGroup.find('#institutio');
    institutio.attr('id', 'institutio' + Runtime.educationGroupCount);

    const faculty = newEducationGroup.find('#faculty');
    faculty.attr('id', 'faculty' + Runtime.educationGroupCount);

    const specialty = newEducationGroup.find('#specialty');
    specialty.attr('id', 'specialty' + Runtime.educationGroupCount);

    const finishYear = newEducationGroup.find('#finishYear');
    finishYear.attr('id', 'finishYear' + Runtime.educationGroupCount);

    const educationType = newEducationGroup.find('#educationType');
    educationType.attr('id', 'educationType' + Runtime.educationGroupCount);
    
    const separator = '<hr class="my-4" id="sep' + Runtime.educationGroupCount + '">';
    educationGroup.after(separator);
    $('#sep' + Runtime.educationGroupCount).after(newEducationGroup);
};

class Runtime {
    static educationGroupCount = 0;
}
