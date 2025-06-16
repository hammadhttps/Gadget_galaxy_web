// Password strength indicator
      const passwordInput = document.getElementById('password');
      const strengthBar = document.getElementById('password-strength-bar');
      
      passwordInput.addEventListener('input', function() {
        const strength = calculatePasswordStrength(this.value);
        updateStrengthBar(strength);
      });
      
      function calculatePasswordStrength(password) {
        // Simple strength calculation
        let strength = 0;
        if (password.length > 0) strength += 1;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        return strength;
      }
      
      function updateStrengthBar(strength) {
        const colors = ['#ff4757', '#ff6348', '#ffa502', '#2ed573', '#1dd1a1'];
        const width = strength * 25;
        strengthBar.style.width = width + '%';
        strengthBar.style.background = colors[strength - 1] || colors[0];
      }