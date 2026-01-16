// ============================================
// TEACHER PORTAL MODULE
// ============================================

// Check if user is logged in as teacher
(function checkTeacherAuth() {
    const userData = localStorage.getItem('kwest_user');
    if (!userData) {
        // Not logged in, redirect to login
        window.location.href = 'login.html';
        return;
    }
    
    try {
        const user = JSON.parse(userData);
        if (user.role !== 'teacher') {
            // Not a teacher, redirect to student dashboard
            alert('Access denied. Teacher account required.');
            window.location.href = 'dashboard.html';
            return;
        }
        
        // Update UI with teacher name if available
        console.log('Teacher logged in:', user.username);
    } catch (e) {
        console.error('Auth check failed:', e);
        window.location.href = 'login.html';
    }
})();

// View Management
function switchView(viewName) {
    // Hide all views
    document.querySelectorAll('.teacher-view').forEach(view => {
        view.classList.remove('active');
    });

    // Show selected view
    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.add('active');
    }

    // Update sidebar buttons
    document.querySelectorAll('.sidebar-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-view="${viewName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Initialize sidebar navigation
document.querySelectorAll('.sidebar-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const viewName = this.getAttribute('data-view');
        switchView(viewName);
    });
});

// ============================================
// FILE UPLOAD HANDLING
// ============================================

const uploadZone = document.getElementById('upload-zone');
const fileInput = document.getElementById('file-input');
const filePreview = document.getElementById('file-preview');
const removeFileBtn = document.getElementById('remove-file');
const generateQuizBtn = document.getElementById('generate-quiz');
const loadingState = document.getElementById('loading-state');
const successState = document.getElementById('success-state');
const createAnotherBtn = document.getElementById('create-another');

let selectedFile = null;

// Click to upload
uploadZone.addEventListener('click', () => {
    fileInput.click();
});

// Drag and drop
uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = 'rgba(168, 85, 247, 0.8)';
    uploadZone.style.background = 'rgba(15, 23, 42, 0.9)';
});

uploadZone.addEventListener('dragleave', () => {
    uploadZone.style.borderColor = 'rgba(168, 85, 247, 0.3)';
    uploadZone.style.background = 'rgba(15, 23, 42, 0.6)';
});

uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = 'rgba(168, 85, 247, 0.3)';
    uploadZone.style.background = 'rgba(15, 23, 42, 0.6)';

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

// File input change
fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
    }
});

// Handle file selection
function handleFile(file) {
    const validTypes = [
        'application/pdf',
        'text/plain',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!validTypes.includes(file.type)) {
        alert('Please upload a valid file (PDF, TXT, DOC, DOCX)');
        return;
    }

    selectedFile = file;

    // Update file info
    document.getElementById('file-name').textContent = file.name;
    document.getElementById('file-size').textContent = formatFileSize(file.size);

    // Show preview, hide upload zone
    uploadZone.style.display = 'none';
    filePreview.style.display = 'block';
}

// Remove file
removeFileBtn.addEventListener('click', () => {
    selectedFile = null;
    fileInput.value = '';
    uploadZone.style.display = 'block';
    filePreview.style.display = 'none';
});

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// ============================================
// QUIZ GENERATION
// ============================================

generateQuizBtn.addEventListener('click', async () => {
    // Get configuration
    const quizTitle = document.getElementById('quiz-title').value.trim();
    const numQuestions = document.getElementById('num-questions').value;
    const difficulty = document.getElementById('difficulty').value;
    const mcq = document.getElementById('mcq').checked;
    const trueFalse = document.getElementById('true-false').checked;
    const shortAnswer = document.getElementById('short-answer').checked;

    // Validation
    if (!quizTitle) {
        alert('Please enter a quiz title');
        return;
    }

    if (!mcq && !trueFalse && !shortAnswer) {
        alert('Please select at least one quiz type');
        return;
    }

    if (!selectedFile) {
        alert('Please upload a file first');
        return;
    }

    // Show loading state
    filePreview.style.display = 'none';
    loadingState.style.display = 'block';

    // Simulate quiz generation (replace with actual API call)
    try {
        await generateQuizFromFile(selectedFile, {
            title: quizTitle,
            numQuestions: parseInt(numQuestions),
            difficulty,
            types: {
                mcq,
                trueFalse,
                shortAnswer
            }
        });

        // Show success state
        loadingState.style.display = 'none';
        successState.style.display = 'block';

        // Update stats
        updateStats();
    } catch (error) {
        console.error('Quiz generation failed:', error);
        alert('Failed to generate quiz. Please try again.');
        loadingState.style.display = 'none';
        filePreview.style.display = 'block';
    }
});

// Create another quiz
createAnotherBtn.addEventListener('click', () => {
    // Reset everything
    selectedFile = null;
    fileInput.value = '';
    document.getElementById('quiz-title').value = '';
    document.getElementById('num-questions').value = '10';
    document.getElementById('difficulty').value = 'medium';
    document.getElementById('mcq').checked = true;
    document.getElementById('true-false').checked = false;
    document.getElementById('short-answer').checked = false;

    // Show upload zone
    successState.style.display = 'none';
    uploadZone.style.display = 'block';
});

// ============================================
// API INTEGRATION (Placeholder)
// ============================================

async function generateQuizFromFile(file, config) {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Generating quiz:', {
                file: file.name,
                config
            });
            
            // Store quiz data (in a real app, this would come from the API)
            const quiz = {
                id: Date.now(),
                title: config.title,
                questions: config.numQuestions,
                difficulty: config.difficulty,
                createdAt: new Date().toISOString(),
                students: 0,
                avgScore: 0
            };

            // Store in localStorage for demo
            const quizzes = JSON.parse(localStorage.getItem('teacherQuizzes') || '[]');
            quizzes.push(quiz);
            localStorage.setItem('teacherQuizzes', JSON.stringify(quizzes));

            resolve(quiz);
        }, 3000); // 3 second delay
    });
}

// ============================================
// STATS MANAGEMENT
// ============================================

function updateStats() {
    const quizzes = JSON.parse(localStorage.getItem('teacherQuizzes') || '[]');
    
    // Update sidebar stats
    document.getElementById('total-quizzes').textContent = quizzes.length;
    
    // For demo purposes, calculate some stats
    const totalStudents = quizzes.reduce((sum, q) => sum + (q.students || 0), 0);
    document.getElementById('total-students').textContent = totalStudents;
}

// ============================================
// LOAD QUIZZES
// ============================================

function loadQuizzes() {
    const quizzes = JSON.parse(localStorage.getItem('teacherQuizzes') || '[]');
    const quizzesGrid = document.getElementById('quizzes-grid');

    if (quizzes.length === 0) {
        quizzesGrid.innerHTML = `
            <div class="empty-state">
                <i data-lucide="file-question" style="width: 48px; height: 48px; color: var(--text-muted);"></i>
                <p>No quizzes created yet</p>
                <button class="btn-cyber-primary" onclick="switchView('upload')">Create Your First Quiz</button>
            </div>
        `;
    } else {
        quizzesGrid.innerHTML = quizzes.map(quiz => `
            <div class="quiz-card">
                <div class="quiz-card-header">
                    <h3 class="quiz-card-title">${quiz.title}</h3>
                    <span class="quiz-badge">${quiz.difficulty}</span>
                </div>
                <div class="quiz-card-stats">
                    <div class="quiz-stat">
                        <span class="quiz-stat-label">Questions</span>
                        <span class="quiz-stat-value">${quiz.questions}</span>
                    </div>
                    <div class="quiz-stat">
                        <span class="quiz-stat-label">Students</span>
                        <span class="quiz-stat-value">${quiz.students || 0}</span>
                    </div>
                    <div class="quiz-stat">
                        <span class="quiz-stat-label">Avg Score</span>
                        <span class="quiz-stat-value">${quiz.avgScore || 0}%</span>
                    </div>
                </div>
                <div class="quiz-card-actions">
                    <button class="btn-quiz-action">View</button>
                    <button class="btn-quiz-action">Share</button>
                    <button class="btn-quiz-action">Edit</button>
                </div>
            </div>
        `).join('');
    }

    // Reinitialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Load initial data
    updateStats();
    loadQuizzes();

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    console.log('Teacher Portal initialized');
});

// Refresh quizzes when switching to quizzes view
const originalSwitchView = switchView;
switchView = function(viewName) {
    originalSwitchView(viewName);
    if (viewName === 'quizzes') {
        loadQuizzes();
    }
};
