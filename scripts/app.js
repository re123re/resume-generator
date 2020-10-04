const { jsPDF } = window.jspdf;

function onGeneratePdf() {
    const doc = new jsPDF();
    doc.setFont('Roboto-Light');

    doc.setFontSize(22);
    doc.text("Резюме", 10, 10);
    doc.line(10,20, 200, 20);
    //doc.save("resume.pdf");

    doc.setFontSize(16);
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value;
    const patronymic = document.getElementById("firstName").value;
    const position = document.getElementById("position").value;
    const email = document.getElementById("email").value;
    const employment = document.getElementById("employment").value;
    const schedule = document.getElementById("schedule").value;
    const post = document.getElementById("post").value;
    const assignment = document.getElementById("assignment").value;

    const city = document.getElementById("city").value;
    const crossing = document.getElementById("crossing").value;
    const citizenship = document.getElementById("citizenship").value;
    const gender = document.getElementById("gender").value;
    const birthdate = document.getElementById("birthdate").value;
    const maritalStatus = document.getElementById("maritalStatus").value;
    const flexCheckIndeterminate = document.getElementById("flexCheckIndeterminate").value;

    const institutio = document.getElementById("institutio").value;
    const faculty = document.getElementById("faculty").value;
    const specialty = document.getElementById("specialty").value;
    const finishYear = document.getElementById("finishYear").value;
    const educationType = document.getElementById("educationType").value;

    const workPeriod = document.getElementById("workPeriod").value;
    const appointment = document.getElementById("appointment").value;
    const organizationWork = document.getElementById("organizationWork").value;
    const obligation = document.getElementById("obligation").value;

    const training = document.getElementById("training").value;
    const organizationCoach = document.getElementById("organizationCoach").value;
    const completion = document.getElementById("completion").value;
    const languages = document.getElementById("languages").value;
    const drive = document.getElementById("organizationCoach").value;            //???????
    const skills = document.getElementById("skills").value;
    const personalQualities = document.getElementById("personalQualities").value;

    doc.text("Имя: " + firstName, 82, 30);
    doc.text("Фамилия: " + lastName, 82, 40);
    doc.text("Отчество: " + patronymic, 82, 50);
    doc.text("Желаемая зарплата: " + position, 10, 60);
    doc.text("E-mail: " + email, 10, 70);
    doc.text("Занятость: " + employment, 10, 80);
    doc.text("График работы: " + schedule, 10, 90);
    doc.text("Должность: " + post, 10, 100);
    doc.text("Готовность к командировкам: " + assignment, 10, 110);

    doc.text("Город: " + city, 10, 120);
    doc.text("Переезд: " + crossing, 10, 130);
    doc.text("Гражданство: " + citizenship, 10, 130);
    doc.text("Пол: " + gender, 10, 140);
    doc.text("Дата рождения: " + birthdate, 10, 150);
    doc.text("Семейное положение: " + maritalStatus, 10, 160);
    doc.text("Есть дети: " + flexCheckIndeterminate, 10, 170);

    doc.text("Учебное заведение: " + institutio, 10, 130);
    doc.text("Факультет: " + faculty, 10, 130);
    doc.text("Специальность: " + specialty, 10, 130);
    doc.text("Год окончания: " + finishYear, 10, 130);
    doc.text("Форма обучения: " + educationType, 10, 130);

    doc.text("Период работы: " + workPeriod, 10, 130);
    doc.text("Должность: " + organizationWork, 10, 130);
    doc.text("Организация: " + organization, 10, 130);
    doc.text("Должностные обязанности и достижения: ", 10, 130);
    doc.text(obligation, 10, 130);

    doc.text("Название курса: " + training, 10, 130);
    doc.text("Наименование организации: " + organizationCoach, 10, 130);
    doc.text("Год окончания: " + completion, 10, 130);
    doc.text("Знание иностранных языков: " + languages, 10, 130);
    doc.text("Водительские права (категории): " + drive, 10, 130); //????????
    doc.text("Ключевые навыки: " + skills, 10, 130);
    doc.text("Личные качества: ", 10, 130);
    doc.text(personalQualities, 10, 130);


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
