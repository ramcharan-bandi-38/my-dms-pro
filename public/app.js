const mockFiles = [
    { id: 1, name: "Lecture_Notes.pdf", icon: "📄" },
    { id: 2, name: "Grades_Spreadsheet.xlsx", icon: "📊" }
];

const roleSelect = document.getElementById('roleSelect');
const uploadForm = document.getElementById('uploadForm');
const sirSection = document.getElementById('sirFeatureSection');
const adminSection = document.getElementById('adminFeatureSection');
const fileGrid = document.getElementById('fileGrid');

function updateUIForRole(role) {
    if (role === 'admin' || role === 'sir') {
        uploadForm.classList.remove('hidden');
    } else {
        uploadForm.classList.add('hidden');
    }

    if (role === 'sir') sirSection.classList.remove('hidden'); else sirSection.classList.add('hidden');
    if (role === 'admin') adminSection.classList.remove('hidden'); else adminSection.classList.add('hidden');

    renderFiles(role);
}

function renderFiles(currentRole) {
    fileGrid.innerHTML = '';
    mockFiles.forEach(file => {
        const card = document.createElement('div');
        card.className = 'file-card';

        const showDeleteBtn = (currentRole === 'admin' || currentRole === 'sir') 
            ? `<button class="btn-action del" onclick="alert('Deleted ${file.name}!')">Delete</button>` 
            : '';

        card.innerHTML = `
            <div class="file-icon">${file.icon}</div>
            <span class="file-name">${file.name}</span>
            <div class="file-actions">
                <a href="#" class="btn-action dl" onclick="alert('Downloading ${file.name}...')">Download</a>
                ${showDeleteBtn}
            </div>
        `;
        fileGrid.appendChild(card);
    });
}

roleSelect.addEventListener('change', (e) => {
    updateUIForRole(e.target.value);
});

updateUIForRole(roleSelect.value);
