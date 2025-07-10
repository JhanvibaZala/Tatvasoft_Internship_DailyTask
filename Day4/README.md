## 🔐 JWT Authentication - Daily Task

### ✅ Tech Stack

* **Frontend**: Angular 16
* **Backend**: ASP.NET Core 8 Web API
* **Auth**: JSON Web Token (JWT)

---

### 📌 Features

* User login with JWT
* Secure API access
* Role-based routing (admin/user)
* Token decoding and storage in frontend
* Error handling via toast notifications

---

### 🔄 API Endpoint

**POST** `/api/Login/LoginUser`

#### Request:

```json
{
  "EmailAddress": "user@example.com",
  "Password": "password123"
}
```

#### Success Response:

```json
{
  "data": "<jwt_token>",
  "result": 1,
  "message": "Login successful"
}
```

#### Failure Response:

```json
{
  "data": null,
  "result": 0,
  "message": "User not found"
}
```

---

### 📂 Key Files

* `auth.service.ts` — Sends login request
* `login.component.ts` — Handles form and response
* `UserService.cs` — Generates JWT
* `JwtService.cs` — Token utility
* `LoginController.cs` — API endpoint

---

Let me know if you want it in `.md` file format too!
