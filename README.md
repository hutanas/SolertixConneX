# SolertixConneX
Solertix Remote Support Application


Here's a complete packaged solution for **SolertixConneX** remote support application

---

## 📦 **SolertixConneX - Remote Support Application Package**

---

### 📁 **Folder Structure**

```
SolertixConneX/
├── index.html
├── styles.css
├── app.js
├── auth.js
├── session.js
├── README.md
├── assets/
│   ├── logo.png
│   ├── favicon.ico
│   └── icons/
│       ├── icon-help.png
│       ├── icon-logout.png
│       └── icon-settings.png
└── config/
    └── config.json
```

---

## 📄 1. `README.md` - Project Overview

```markdown
# SolertixConneX - Remote Support Application

This is a remote support application developed for the **Solertix** organization, designed to provide secure and efficient remote assistance to users. It includes features like user authentication, role-based access, session management, and real-time chat.

---

## 🧩 Features

- **Role-based access**: Users can be either "Helper" (IT support) or "Sharer" (end-user).
- **Secure Session Creation**: Generate session codes for remote access.
- **Real-time Chat**: Chat interface during active sessions.
- **Session Monitoring**: Track session history and statistics.
- **User Authentication**: Secure login with Microsoft Entra ID (simulated).
- **Responsive Design**: Works across all devices and browsers.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Responsive Design**

---

## 📦 How to Deploy

### Option 1: GitHub Pages
1. Push the code to a GitHub repository.
2. Enable GitHub Pages in the repository settings.
3. Your app will be live at: `https://username.github.io/SolertixConneX/`

### Option 2: Azure Static Web Apps
1. Create an Azure account.
2. Use the Azure CLI to deploy the app:
   ```bash
   az staticwebapp create \
       --name SolertixConneX \
       --resource-group your-resource-group \
       --source https://github.com/your-username/SolertixConneX \
       --location "eastus" \
       --branch main
   ```

### Option 3: Netlify
1. Create a Netlify account.
2. Upload your project or connect it to GitHub.
3. Your app will be live at: `https://solertixconne-x.netlify.app/`

---

## 📁 Folder Structure

- `index.html`: Main application file.
- `styles.css`: Styling for the app.
- `app.js`: Main logic for the application.
- `auth.js`: User authentication (simulated).
- `session.js`: Session management.
- `config/config.json`: Configuration file for the app.
- `assets/`: Contains images and icons.
- `README.md`: This document.

---

## 📌 License

This project is open source and available under the **MIT License**.

---

## 📞 Contact

For any questions or support, please contact:
- **Email**: support@solertix.com
- **Website**: https://www.solertix.com
- **GitHub**: https://github.com/solertix
```

---

## 📁 2. `config/config.json` - Configuration File

```json
{
  "app": {
    "name": "SolertixConneX",
    "version": "1.0.0",
    "organization": "Solertix",
    "license": "MIT",
    "author": "Solertix Team",
    "description": "Remote support application for Solertix users"
  },
  "branding": {
    "logo": "assets/logo.png",
    "favicon": "assets/favicon.ico"
  },
  "auth": {
    "provider": "Microsoft Entra ID",
    "loginUrl": "https://login.microsoftonline.com"
  },
  "features": {
    "sessionCodeLength": 8,
    "maxSessionDuration": "2 hours"
  }
}
```

---

## 📎 3. `assets/logo.png` - Logo

- Place your **SolertixConneX** logo in PNG format here.
- You can use tools like [Canva](https://www.canva.com) or [Figma](https://www.figma.com) to create a custom logo.

---

## 📎 4. `assets/favicon.ico` - Favicon

- Create a favicon using [favicon.io](https://favicon.io) or any online favicon generator.
- Save it as `favicon.ico` and place it in the `assets` folder.

---

## 📎 5. `assets/icons/` - Icons

- Add icons for help, logout, and settings in the `assets/icons/` folder.
- You can use [Flaticon](https://www.flaticon.com) or [IconFont](https://www.iconfont.cn) for free icons.

---

## 📦 Deployment Instructions

### 🚀 GitHub Pages

1. Create a GitHub repository named `SolertixConneX`.
2. Push all the files to the repository.
3. Go to **Settings > Pages** in your GitHub repository.
4. Select the `main` branch and save.
5. Your app will be live at `https://yourusername.github.io/SolertixConneX/`.

---

## 🎯 Next Steps

- Add backend support for real authentication and session tracking.
- Integrate with Microsoft Entra ID or Azure Active Directory.
- Add user management and reporting features.
- Create a mobile version for Android and iOS.

---

## ✅ Final Notes

This is a **front-end only** version of the SolertixConneX application. For a full production-ready solution, you would need to add backend services, authentication, and database integration.
