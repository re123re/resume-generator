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

    doc.text("Имя: " + firstName, 10, 30);
    doc.text("Фамилия: " + lastName, 10, 40);
    doc.text("Отчество: " + patronymic, 10, 50);

    


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
