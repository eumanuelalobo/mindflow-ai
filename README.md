🧠 Mindflow AI - Mentor de Estudos Inteligente
O Mindflow AI é uma plataforma robusta desenvolvida para otimizar o aprendizado técnico de estudantes de tecnologia. Utilizando a API do Google Gemini, o sistema atua como um mentor que simplifica conceitos complexos e os organiza em um histórico persistente para revisão contínua.

🏛️ Arquitetura do Sistema
O projeto foi estruturado sob o princípio de desacoplamento, utilizando uma arquitetura API-First. Isso garante que a inteligência do sistema resida no Backend, permitindo que múltiplos clientes consumam os mesmos dados via JSON de forma segura e escalável.

🚀 Tecnologias e Stack Técnica
Backend (O Core)
Python & Django: Base do servidor de aplicação.

Django Ninja: Utilizado para a construção de APIs REST modernas, garantindo alta performance e documentação automatizada.

PostgreSQL: Banco de dados relacional para armazenamento seguro de usuários e histórico.

JWT (JSON Web Token): Autenticação Stateless para garantir a segurança das rotas.

Frontend (Web)
Next.js (React): Framework para uma interface reativa e otimizada.

Tailwind CSS: Estilização baseada em utilitários para um design moderno e responsivo.

React Markdown: Renderização técnica para suporte a tabelas, listas e blocos de código nas explicações da IA.

🛠️ Como Executar o Projeto
1. Backend (Django)
Bash
cd backend
python -m venv venv
# No Windows: venv\Scripts\activate
# No Linux/Mac: source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
2. Frontend (Next.js)
Bash
cd frontend
npm install
npm run dev
🌟 Funcionalidades de Destaque
Explicação Técnica com IA: Integração direta com o Gemini para decompor temas de Análise e Desenvolvimento de Sistemas.

Persistência e Ordenação: Histórico de estudos salvo no banco de dados com ordenação cronológica automática.

Sessão de Usuário Segura: Sistema de login completo com proteção de rotas via tokens JWT.

Interface Dinâmica: Sidebar reativa que carrega as últimas consultas sem necessidade de atualização da página.

👤 Desenvolvedora
Manuela Lobo

🎓 Estudante do último ano de Análise e Desenvolvimento de Sistemas (ADS).

⚙️ Experiência prévia no setor de eletrônica industrial (Taigar System), aplicando rigor técnico e lógica no desenvolvimento de software.
