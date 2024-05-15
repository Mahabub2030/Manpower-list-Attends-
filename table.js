// Function to prepare the table for PDF generation
function prepareTableForPDF() {
    // Add 'yellow-background' class to Friday columns
    $('#example thead th').each(function(index) {
        if (index >= 3 && index % 7 === 4) { // Friday columns start at index 3, and every 7th column is a Friday
            $(this).addClass('yellow-background');
            $('#example tbody tr').each(function() {
                $(this).find('td').eq(index).addClass('yellow-background');
            });
        }
    });
}

// Function to generate PDF
function generatePDF() {
    // Prepare the table for PDF generation
    prepareTableForPDF();

    // Generate PDF using DataTables built-in PDF functionality
    $.fn.dataTable.Api.register('buttons.exportData()', function (options) {
        if (this.context.length) {
            var jsonResult = $.ajax({
                url: './data table/js/pdfmake.min.js',
                async: false,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify({}),
                type: 'GET'
            }).responseText;
            var o = JSON.parse(jsonResult);
            return o;
        }
    });

    $('#example').DataTable().buttons.exportData({ format: 'pdf' });
}

// Call generatePDF function when a button to download the PDF is clicked
$('#download-pdf-button').on('click', function () {
    generatePDF();
});
