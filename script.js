function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n) return true;
  if (n % 2n === 0n) return false;
  for (let i = 3n; i * i <= n; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
}

function decompose() {
  const input = document.getElementById("inputNumber").value.trim();
  let E;

  try {
    E = BigInt(input);
  } catch {
    document.getElementById("result").innerText = "❌ Invalid number.";
    return;
  }

  if (E < 4n || E % 2n !== 0n) {
    document.getElementById("result").innerText = "❌ Please enter an even number ≥ 4.";
    return;
  }

  const start = performance.now();

  let found = false;
  for (let p = 2n; p <= E / 2n; p++) {
    let q = E - p;
    if (isPrime(p) && isPrime(q)) {
      const end = performance.now();
      document.getElementById("result").innerText =
        `✅ ${E} = ${p} + ${q}\n⏱️ Time: ${(end - start).toFixed(2)} ms`;
      found = true;
      break;
    }
  }

  if (!found) {
    document.getElementById("result").innerText = "⚠️ No prime pair found (unexpected for even numbers ≥ 4).";
  }
}
