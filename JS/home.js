// وظيفة البحث في الفئات
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    const categories = document.querySelectorAll('.category');

    searchBar.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();

        categories.forEach(category => {
            const categoryName = category.querySelector('p').textContent.toLowerCase();
            if (categoryName.includes(searchText)) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    });

    // حدث لزر "Report a Lost Item"
    const reportButton = document.querySelector('.report-btn');
    reportButton.addEventListener('click', (e) => {
        // يمكنك هنا إضافة منطق إضافي، مثل فتح نموذج أو إعادة توجيه
        console.log('Report button clicked!');
        // مثال: إعادة توجيه إلى صفحة التقرير
        window.location.href = '../pages/report.html';
    });

    // (اختياري) تحسين النافبار: إضافة تأثير عند النقر على الروابط
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // إزالة الفئة 'active' من جميع الروابط
            navLinks.forEach(l => l.classList.remove('active'));
            // إضافة الفئة 'active' للرابط المنقر
            e.target.classList.add('active');
        });
    });
});