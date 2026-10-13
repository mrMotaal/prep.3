/* ==========================================================================
   WEEKLY ASSESSMENTS DATA REPOSITORY
   Educator: Mr Ahmed Abd El-Motaal (Math Teacher & Content Creator)
   Curriculum: Mathematics (Prep / Primary / Middle School)
   Assessments Included:
   - Week 2: Proportion & Scale Drawing (Group A, Group B, Group C)
   - Week 3: Sets, Operations & Venn Diagrams (Group A, Group B, Group C)
   - Week 4: Operations in Integers (Z) & Absolute Value (Group A, Group B, Group C)
   - Week 5: Operations in Rational Numbers (Q) & Inverses (Group A, Group B, Group C)
   ========================================================================== */

const WEEKS_DATA = {
  // ========================================================================
  // PREP 3 • WEEK 2: POWERS OF POWERS
  // Official Egyptian Curriculum 2026/2027 • Grade 9 / Prep 3
  // ========================================================================
  prep3_week2: {
    id: 'prep3_week2',
    title: 'Prep 3 • Week 2: Powers of Powers',
    stageName: 'Prep 3 (Grade 9) • Week 2: Powers of Powers',
    groupA: {
      id: 'groupA',
      title: 'Group (A)',
      badgeName: 'Group (A) • Prep 3 • Week 2 Assessment',
      questions: [
        {
          id: 'P3_W1_A1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Power of a Power Law',
          prompt: '1) Which of the following is equivalent to \\((b^2)^3\\)?',
          options: [
            { key: 'a', text: '\\(b^5\\)', isCorrect: false },
            { key: 'b', text: '\\(b^{23}\\)', isCorrect: false },
            { key: 'c', text: '\\(b^{32}\\)', isCorrect: false },
            { key: 'd', text: '\\(b^6\\)', isCorrect: true }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: State the Law of Exponents (Power of a Power):</strong></div>
            <div class="sol-math">\\[(a^m)^n = a^{m \\times n}\\]</div>
            <div class="sol-step"><strong>Step 2: Multiply the inner exponent by the outer exponent:</strong></div>
            <div class="sol-math">\\[(b^2)^3 = b^{2 \\times 3} = b^6\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(d) \\(b^6\\)</strong></div>
          `
        },
        {
          id: 'P3_W1_A2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Value of Power of a Power when x = 1',
          prompt: '2) What is the value of \\((x^{11})^6\\) when \\(x = 1\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Method 1: Simplify using the Power of a Power rule:</strong></div>
            <div class="sol-math">\\[(x^{11})^6 = x^{11 \\times 6} = x^{66}\\]</div>
            <div class="sol-step"><strong>Substitute \\(x = 1\\):</strong></div>
            <div class="sol-math">\\[1^{66} = 1\\]</div>
            <div class="sol-divider">OR</div>
            <div class="sol-step"><strong>Method 2: Direct Substitution:</strong></div>
            <div class="sol-math">\\[(1^{11})^6 = (1)^6 = 1\\]</div>
            <div class="sol-highlight">The value of the expression is <strong>1</strong></div>
          `
        },
        {
          id: 'P3_W1_A3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Product of Powers in Simplest Form',
          prompt: '3) What is the result of \\(y^8 \\times (y^3)^4\\) in simplest form?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Simplify the power of a power factor:</strong></div>
            <div class="sol-math">\\[(y^3)^4 = y^{3 \\times 4} = y^{12}\\]</div>
            <div class="sol-step"><strong>Step 2: Multiply powers with the same base (add exponents):</strong></div>
            <div class="sol-math">\\[y^8 \\times y^{12} = y^{8 + 12} = y^{20}\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>\\(y^{20}\\)</strong></div>
          `
        },
        {
          id: 'P3_W1_A4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Power of a Product with Negative Sign',
          prompt: '4) What is the result of \\((-m^3 n)^2\\) in simplest form?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Distribute the even exponent 2 to each factor:</strong></div>
            <div class="sol-math">\\[(-m^3 n)^2 = (-1)^2 \\times (m^3)^2 \\times n^2\\]</div>
            <div class="sol-step"><strong>Step 2: Simplify each term (even power of negative is positive):</strong></div>
            <div class="sol-math">\\[(-1)^2 = 1\\]</div>
            <div class="sol-math">\\[(m^3)^2 = m^{3 \\times 2} = m^6\\]</div>
            <div class="sol-math">\\[n^2 = n^2\\]</div>
            <div class="sol-step"><strong>Step 3: Combine factors:</strong></div>
            <div class="sol-math">\\[1 \\times m^6 \\times n^2 = m^6 n^2\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>\\(m^6 n^2\\)</strong></div>
          `
        },
        {
          id: 'P3_W1_A5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Exponential Equation & Substitution',
          prompt: '5) If \\(3^y = 2\\), what is the value of \\(9^y\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express the base 9 as a power of 3:</strong></div>
            <div class="sol-math">\\[9 = 3^2\\]</div>
            <div class="sol-step"><strong>Step 2: Rewrite \\(9^y\\) using the power of a power property:</strong></div>
            <div class="sol-math">\\[9^y = (3^2)^y = 3^{2y} = (3^y)^2\\]</div>
            <div class="sol-step"><strong>Step 3: Substitute the given value \\(3^y = 2\\):</strong></div>
            <div class="sol-math">\\[(3^y)^2 = (2)^2 = 4\\]</div>
            <div class="sol-highlight">The value of \\(9^y\\) is <strong>4</strong></div>
          `
        }
      ]
    },
    groupB: {
      id: 'groupB',
      title: 'Group (B)',
      badgeName: 'Group (B) • Prep 3 • Week 2 Assessment',
      questions: [
        {
          id: 'P3_W1_B1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Power of a Power Law',
          prompt: '1) Which of the following is equivalent to \\((b^3)^4\\)?',
          options: [
            { key: 'a', text: '\\(b^7\\)', isCorrect: false },
            { key: 'b', text: '\\(b^{43}\\)', isCorrect: false },
            { key: 'c', text: '\\(b^{12}\\)', isCorrect: true },
            { key: 'd', text: '\\(b^{34}\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: State the Law of Exponents (Power of a Power):</strong></div>
            <div class="sol-math">\\[(a^m)^n = a^{m \\times n}\\]</div>
            <div class="sol-step"><strong>Step 2: Multiply the inner exponent by the outer exponent:</strong></div>
            <div class="sol-math">\\[(b^3)^4 = b^{3 \\times 4} = b^{12}\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(c) \\(b^{12}\\)</strong></div>
          `
        },
        {
          id: 'P3_W1_B2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Value of Power of a Power when x = 1',
          prompt: '2) What is the value of \\((x^{11})^5\\) when \\(x = 1\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Method 1: Simplify using the Power of a Power rule:</strong></div>
            <div class="sol-math">\\[(x^{11})^5 = x^{11 \\times 5} = x^{55}\\]</div>
            <div class="sol-step"><strong>Substitute \\(x = 1\\):</strong></div>
            <div class="sol-math">\\[1^{55} = 1\\]</div>
            <div class="sol-divider">OR</div>
            <div class="sol-step"><strong>Method 2: Direct Substitution:</strong></div>
            <div class="sol-math">\\[(1^{11})^5 = (1)^5 = 1\\]</div>
            <div class="sol-highlight">The value of the expression is <strong>1</strong></div>
          `
        },
        {
          id: 'P3_W1_B3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Product of Powers in Simplest Form',
          prompt: '3) What is the result of \\(y^6 \\times (y^5)^3\\) in simplest form?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Simplify the power of a power factor:</strong></div>
            <div class="sol-math">\\[(y^5)^3 = y^{5 \\times 3} = y^{15}\\]</div>
            <div class="sol-step"><strong>Step 2: Multiply powers with the same base (add exponents):</strong></div>
            <div class="sol-math">\\[y^6 \\times y^{15} = y^{6 + 15} = y^{21}\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>\\(y^{21}\\)</strong></div>
          `
        },
        {
          id: 'P3_W1_B4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Power of a Product with Negative Sign',
          prompt: '4) What is the result of \\((-m^5 n)^2\\) in simplest form?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Distribute the even exponent 2 to each factor:</strong></div>
            <div class="sol-math">\\[(-m^5 n)^2 = (-1)^2 \\times (m^5)^2 \\times n^2\\]</div>
            <div class="sol-step"><strong>Step 2: Simplify each term:</strong></div>
            <div class="sol-math">\\[(-1)^2 = 1\\]</div>
            <div class="sol-math">\\[(m^5)^2 = m^{5 \\times 2} = m^{10}\\]</div>
            <div class="sol-math">\\[n^2 = n^2\\]</div>
            <div class="sol-step"><strong>Step 3: Combine factors:</strong></div>
            <div class="sol-math">\\[1 \\times m^{10} \\times n^2 = m^{10} n^2\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>\\(m^{10} n^2\\)</strong></div>
          `
        },
        {
          id: 'P3_W1_B5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Exponential Equation & Substitution',
          prompt: '5) If \\(2^y = 3\\), what is the value of \\(4^y\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express the base 4 as a power of 2:</strong></div>
            <div class="sol-math">\\[4 = 2^2\\]</div>
            <div class="sol-step"><strong>Step 2: Rewrite \\(4^y\\) using the power of a power property:</strong></div>
            <div class="sol-math">\\[4^y = (2^2)^y = 2^{2y} = (2^y)^2\\]</div>
            <div class="sol-step"><strong>Step 3: Substitute the given value \\(2^y = 3\\):</strong></div>
            <div class="sol-math">\\[(2^y)^2 = (3)^2 = 9\\]</div>
            <div class="sol-highlight">The value of \\(4^y\\) is <strong>9</strong></div>
          `
        }
      ]
    },
    groupC: {
      id: 'groupC',
      title: 'Group (C)',
      badgeName: 'Group (C) • Prep 3 • Week 2 Assessment',
      questions: [
        {
          id: 'P3_W1_C1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Power of a Power Law',
          prompt: '1) Which of the following is equivalent to \\((b^5)^4\\)?',
          options: [
            { key: 'a', text: '\\(b^9\\)', isCorrect: false },
            { key: 'b', text: '\\(b^{20}\\)', isCorrect: true },
            { key: 'c', text: '\\(b^{54}\\)', isCorrect: false },
            { key: 'd', text: '\\(b^{45}\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: State the Law of Exponents (Power of a Power):</strong></div>
            <div class="sol-math">\\[(a^m)^n = a^{m \\times n}\\]</div>
            <div class="sol-step"><strong>Step 2: Multiply the inner exponent by the outer exponent:</strong></div>
            <div class="sol-math">\\[(b^5)^4 = b^{5 \\times 4} = b^{20}\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) \\(b^{20}\\)</strong></div>
          `
        },
        {
          id: 'P3_W1_C2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Value of Power of a Power when n = 1',
          prompt: '2) What is the value of \\((n^6)^{11}\\) when \\(n = 1\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Method 1: Simplify using the Power of a Power rule:</strong></div>
            <div class="sol-math">\\[(n^6)^{11} = n^{6 \\times 11} = n^{66}\\]</div>
            <div class="sol-step"><strong>Substitute \\(n = 1\\):</strong></div>
            <div class="sol-math">\\[1^{66} = 1\\]</div>
            <div class="sol-divider">OR</div>
            <div class="sol-step"><strong>Method 2: Direct Substitution:</strong></div>
            <div class="sol-math">\\[(1^6)^{11} = (1)^{11} = 1\\]</div>
            <div class="sol-highlight">The value of the expression is <strong>1</strong></div>
          `
        },
        {
          id: 'P3_W1_C3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Product of Powers in Simplest Form',
          prompt: '3) What is the result of \\(y^4 \\times (y^7)^3\\) in simplest form?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Simplify the power of a power factor:</strong></div>
            <div class="sol-math">\\[(y^7)^3 = y^{7 \\times 3} = y^{21}\\]</div>
            <div class="sol-step"><strong>Step 2: Multiply powers with the same base (add exponents):</strong></div>
            <div class="sol-math">\\[y^4 \\times y^{21} = y^{4 + 21} = y^{25}\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>\\(y^{25}\\)</strong></div>
          `
        },
        {
          id: 'P3_W1_C4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Power of a Product with Odd Exponent',
          prompt: '4) What is the result of \\((-m^7 n)^3\\) in simplest form?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Distribute the odd exponent 3 to each factor:</strong></div>
            <div class="sol-math">\\[(-m^7 n)^3 = (-1)^3 \\times (m^7)^3 \\times n^3\\]</div>
            <div class="sol-step"><strong>Step 2: Since 3 is an odd exponent, the negative sign is retained:</strong></div>
            <div class="sol-math">\\[(-1)^3 = -1\\]</div>
            <div class="sol-math">\\[(m^7)^3 = m^{7 \\times 3} = m^{21}\\]</div>
            <div class="sol-math">\\[n^3 = n^3\\]</div>
            <div class="sol-step"><strong>Step 3: Combine factors:</strong></div>
            <div class="sol-math">\\[-1 \\times m^{21} \\times n^3 = -m^{21} n^3\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>\\(-m^{21} n^3\\)</strong></div>
          `
        },
        {
          id: 'P3_W1_C5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Exponential Equation & Substitution',
          prompt: '5) If \\(5^y = 3\\), what is the value of \\(25^y\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express the base 25 as a power of 5:</strong></div>
            <div class="sol-math">\\[25 = 5^2\\]</div>
            <div class="sol-step"><strong>Step 2: Rewrite \\(25^y\\) using the power of a power property:</strong></div>
            <div class="sol-math">\\[25^y = (5^2)^y = 5^{2y} = (5^y)^2\\]</div>
            <div class="sol-step"><strong>Step 3: Substitute the given value \\(5^y = 3\\):</strong></div>
            <div class="sol-math">\\[(5^y)^2 = (3)^2 = 9\\]</div>
            <div class="sol-highlight">The value of \\(25^y\\) is <strong>9</strong></div>
          `
        }
      ]
    }
  },

  // ========================================================================
  // PREP 3 • WEEK 3: EXPONENTIAL EQUATIONS
  // Official Egyptian Curriculum 2026/2027 • Grade 9 / Prep 3
  // ========================================================================
  prep3_week3: {
    id: 'prep3_week3',
    title: 'Prep 3 • Week 3: Exponential Equations',
    stageName: 'Prep 3 (Grade 9) • Week 3: Exponential Equations',
    groupA: {
      id: 'groupA',
      title: 'Group (A)',
      badgeName: 'Group (A) • Prep 3 • Week 3 Assessment',
      questions: [
        {
          id: 'P3_W2_A1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Zero Power Law',
          prompt: '1) If \\(11^{x - 3} = 1\\), what is the value of \\(x\\)?',
          options: [
            { key: 'a', text: '1', isCorrect: false },
            { key: 'b', text: '2', isCorrect: false },
            { key: 'c', text: '3', isCorrect: true },
            { key: 'd', text: '4', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Use the property of powers: \\(a^0 = 1\\) (for \\(a \\neq 0\\)):</strong></div>
            <div class="sol-math">\\[1 = 11^0\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents since bases are equal:</strong></div>
            <div class="sol-math">\\[11^{x - 3} = 11^0 \\implies x - 3 = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = 3\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(c) 3</strong></div>
          `
        },
        {
          id: 'P3_W2_A2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Solve Exponential Equation in R',
          prompt: '2) Solve the equation, where \\(x \\in \\mathbb{R}\\): \\[2^{2x - 1} = 8\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express 8 with base 2:</strong></div>
            <div class="sol-math">\\[8 = 2^3\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents (since bases are equal):</strong></div>
            <div class="sol-math">\\[2^{2x - 1} = 2^3 \\implies 2x - 1 = 3\\]</div>
            <div class="sol-step"><strong>Step 3: Solve linear equation for \\(x\\):</strong></div>
            <div class="sol-math">\\[2x = 3 + 1 = 4 \\implies x = \\frac{4}{2} = 2\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{2\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W2_A3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Fractional Base Exponential Equation',
          prompt: '3) Find the solution set in \\(\\mathbb{R}\\): \\[5^{2x - 1} = \\frac{1}{125}\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express \\(\\frac{1}{125}\\) as a power of 5:</strong></div>
            <div class="sol-math">\\[125 = 5^3 \\implies \\frac{1}{125} = 5^{-3}\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
            <div class="sol-math">\\[5^{2x - 1} = 5^{-3} \\implies 2x - 1 = -3\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[2x = -3 + 1 = -2 \\implies x = \\frac{-2}{2} = -1\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{-1\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W2_A4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Negative Power Property',
          prompt: '4) Find the solution set in \\(\\mathbb{R}\\): \\[\\left(\\frac{1}{8}\\right)^{x - 2} = 128\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express both sides with common base 2:</strong></div>
            <div class="sol-math">\\[\\frac{1}{8} = 2^{-3} \\implies \\left(\\frac{1}{8}\\right)^{x - 2} = (2^{-3})^{x - 2} = 2^{-3(x - 2)} = 2^{-3x + 6}\\]</div>
            <div class="sol-math">\\[128 = 2^7\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
            <div class="sol-math">\\[-3x + 6 = 7\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[-3x = 7 - 6 = 1 \\implies x = -\\frac{1}{3}\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{-\\frac{1}{3}\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W2_A5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Compound Exponential Simplification',
          prompt: '5) Find the solution set in \\(\\mathbb{R}\\): \\[\\frac{5^n \\times 49^n}{35^n} = 343\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Decompose bases into prime factors:</strong></div>
            <div class="sol-math">\\[49^n = (7^2)^n = 7^{2n}\\]</div>
            <div class="sol-math">\\[35^n = (5 \\times 7)^n = 5^n \\times 7^n\\]</div>
            <div class="sol-step"><strong>Step 2: Substitute and simplify the LHS:</strong></div>
            <div class="sol-math">\\[\\frac{5^n \\times 7^{2n}}{5^n \\times 7^n} = \\frac{5^n}{5^n} \\times \\frac{7^{2n}}{7^n} = 1 \\times 7^{2n - n} = 7^n\\]</div>
            <div class="sol-step"><strong>Step 3: Express RHS (343) as power of 7:</strong></div>
            <div class="sol-math">\\[343 = 7^3\\]</div>
            <div class="sol-step"><strong>Step 4: Equate powers:</strong></div>
            <div class="sol-math">\\[7^n = 7^3 \\implies n = 3\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{3\\}\\)</strong></div>
          `
        }
      ]
    },
    groupB: {
      id: 'groupB',
      title: 'Group (B)',
      badgeName: 'Group (B) • Prep 3 • Week 3 Assessment',
      questions: [
        {
          id: 'P3_W2_B1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Zero Power Law',
          prompt: '1) If \\(11^{x - 6} = 1\\), what is the value of \\(x\\)?',
          options: [
            { key: 'a', text: '7', isCorrect: false },
            { key: 'b', text: '6', isCorrect: true },
            { key: 'c', text: '5', isCorrect: false },
            { key: 'd', text: '4', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Use the property \\(a^0 = 1\\):</strong></div>
            <div class="sol-math">\\[1 = 11^0\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
            <div class="sol-math">\\[11^{x - 6} = 11^0 \\implies x - 6 = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = 6\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) 6</strong></div>
          `
        },
        {
          id: 'P3_W2_B2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Solve Exponential Equation in R',
          prompt: '2) Solve the equation, where \\(x \\in \\mathbb{R}\\): \\[6^{2x - 1} = 36\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express 36 with base 6:</strong></div>
            <div class="sol-math">\\[36 = 6^2\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
            <div class="sol-math">\\[6^{2x - 1} = 6^2 \\implies 2x - 1 = 2\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[2x = 2 + 1 = 3 \\implies x = \\frac{3}{2} = 1.5\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{\\frac{3}{2}\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W2_B3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Fractional Base Exponential Equation',
          prompt: '3) Find the solution set in \\(\\mathbb{R}\\): \\[7^{2x - 1} = \\frac{1}{49}\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express \\(\\frac{1}{49}\\) as power of 7:</strong></div>
            <div class="sol-math">\\[49 = 7^2 \\implies \\frac{1}{49} = 7^{-2}\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
            <div class="sol-math">\\[7^{2x - 1} = 7^{-2} \\implies 2x - 1 = -2\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[2x = -2 + 1 = -1 \\implies x = -\\frac{1}{2}\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{-\\frac{1}{2}\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W2_B4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Negative Power Property',
          prompt: '4) Find the solution set in \\(\\mathbb{R}\\): \\[\\left(\\frac{1}{9}\\right)^{x - 2} = 81\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express both sides with base 9:</strong></div>
            <div class="sol-math">\\[\\frac{1}{9} = 9^{-1} \\implies \\left(\\frac{1}{9}\\right)^{x - 2} = (9^{-1})^{x - 2} = 9^{-(x - 2)} = 9^{-x + 2}\\]</div>
            <div class="sol-math">\\[81 = 9^2\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
            <div class="sol-math">\\[-x + 2 = 2\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[-x = 2 - 2 = 0 \\implies x = 0\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{0\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W2_B5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Compound Exponential Simplification',
          prompt: '5) Find the solution set in \\(\\mathbb{R}\\): \\[\\frac{16^n \\times 9^n}{36^n} = 64\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Combine terms with identical exponents in numerator:</strong></div>
            <div class="sol-math">\\[16^n \\times 9^n = (16 \\times 9)^n = 144^n\\]</div>
            <div class="sol-step"><strong>Step 2: Divide by denominator:</strong></div>
            <div class="sol-math">\\[\\frac{144^n}{36^n} = \\left(\\frac{144}{36}\\right)^n = 4^n\\]</div>
            <div class="sol-step"><strong>Step 3: Express 64 with base 4:</strong></div>
            <div class="sol-math">\\[64 = 4^3\\]</div>
            <div class="sol-step"><strong>Step 4: Equate exponents:</strong></div>
            <div class="sol-math">\\[4^n = 4^3 \\implies n = 3\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{3\\}\\)</strong></div>
          `
        }
      ]
    },
    groupC: {
      id: 'groupC',
      title: 'Group (C)',
      badgeName: 'Group (C) • Prep 3 • Week 3 Assessment',
      questions: [
        {
          id: 'P3_W2_C1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Zero Power Law',
          prompt: '1) If \\(11^{x - 5} = 1\\), what is the value of \\(x\\)?',
          options: [
            { key: 'a', text: '6', isCorrect: false },
            { key: 'b', text: '5', isCorrect: true },
            { key: 'c', text: '4', isCorrect: false },
            { key: 'd', text: '3', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Use property \\(a^0 = 1\\):</strong></div>
            <div class="sol-math">\\[1 = 11^0\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
            <div class="sol-math">\\[11^{x - 5} = 11^0 \\implies x - 5 = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = 5\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) 5</strong></div>
          `
        },
        {
          id: 'P3_W2_C2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Solve Exponential Equation in R',
          prompt: '2) Solve the equation, where \\(x \\in \\mathbb{R}\\): \\[6^{2x - 1} = 36\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express 36 with base 6:</strong></div>
            <div class="sol-math">\\[36 = 6^2\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
            <div class="sol-math">\\[6^{2x - 1} = 6^2 \\implies 2x - 1 = 2\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[2x = 2 + 1 = 3 \\implies x = \\frac{3}{2}\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{\\frac{3}{2}\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W2_C3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Fractional Base Exponential Equation',
          prompt: '3) Find the solution set in \\(\\mathbb{R}\\): \\[9^{2x - 1} = \\frac{1}{81}\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express \\(\\frac{1}{81}\\) as power of 9:</strong></div>
            <div class="sol-math">\\[81 = 9^2 \\implies \\frac{1}{81} = 9^{-2}\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
            <div class="sol-math">\\[9^{2x - 1} = 9^{-2} \\implies 2x - 1 = -2\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[2x = -2 + 1 = -1 \\implies x = -\\frac{1}{2}\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{-\\frac{1}{2}\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W2_C4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Negative Power Property',
          prompt: '4) Find the solution set in \\(\\mathbb{R}\\): \\[\\left(\\frac{1}{4}\\right)^{x - 2} = 64\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Express both sides with base 4:</strong></div>
            <div class="sol-math">\\[\\frac{1}{4} = 4^{-1} \\implies \\left(\\frac{1}{4}\\right)^{x - 2} = (4^{-1})^{x - 2} = 4^{-(x - 2)} = 4^{-x + 2}\\]</div>
            <div class="sol-math">\\[64 = 4^3\\]</div>
            <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
            <div class="sol-math">\\[-x + 2 = 3\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[-x = 3 - 2 = 1 \\implies x = -1\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{-1\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W2_C5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Compound Exponential Simplification',
          prompt: '5) Find the solution set in \\(\\mathbb{R}\\): \\[\\frac{7^n \\times 27^n}{21^n} = 81\\]',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Decompose prime bases:</strong></div>
            <div class="sol-math">\\[27^n = (3^3)^n = 3^{3n}\\]</div>
            <div class="sol-math">\\[21^n = (7 \\times 3)^n = 7^n \\times 3^n\\]</div>
            <div class="sol-step"><strong>Step 2: Substitute and simplify LHS:</strong></div>
            <div class="sol-math">\\[\\frac{7^n \\times 3^{3n}}{7^n \\times 3^n} = \\frac{7^n}{7^n} \\times \\frac{3^{3n}}{3^n} = 1 \\times 3^{3n - n} = 3^{2n}\\]</div>
            <div class="sol-step"><strong>Step 3: Express 81 as power of 3:</strong></div>
            <div class="sol-math">\\[81 = 3^4\\]</div>
            <div class="sol-step"><strong>Step 4: Equate exponents:</strong></div>
            <div class="sol-math">\\[3^{2n} = 3^4 \\implies 2n = 4 \\implies n = \\frac{4}{2} = 2\\]</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{2\\}\\)</strong></div>
          `
        }
      ]
    }
  },

  // ========================================================================
  // PREP 3 • WEEK 4: QUADRATIC FUNCTIONS
  // Official Egyptian Curriculum 2026/2027 • Grade 9 / Prep 3
  // ========================================================================
  prep3_week4: {
    id: 'prep3_week4',
    title: 'Prep 3 • Week 4: Quadratic Functions',
    stageName: 'Prep 3 (Grade 9) • Week 4: Quadratic Functions',
    groupA: {
      id: 'groupA',
      title: 'Group (A)',
      badgeName: 'Group (A) • Prep 3 • Week 4 Assessment',
      questions: [
        {
          id: 'P3_W3_A1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'y-intercept of Quadratic Function',
          prompt: '1) Which of the following is the y-intercept of the curve of the function \\(f(x) = x^2 - 3x - 4\\)?',
          options: [
            { key: 'a', text: '\\((0, -4)\\)', isCorrect: true },
            { key: 'b', text: '\\((0, -3)\\)', isCorrect: false },
            { key: 'c', text: '\\((0, 3)\\)', isCorrect: false },
            { key: 'd', text: '\\((0, 4)\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Understand the definition of y-intercept:</strong></div>
            <div class="sol-math">\\[\\text{The curve intersects the y-axis when } x = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Substitute \\(x = 0\\) into \\(f(x)\\):</strong></div>
            <div class="sol-math">\\[f(0) = (0)^2 - 3(0) - 4 = 0 - 0 - 4 = -4\\]</div>
            <div class="sol-step"><strong>Step 3: Write the coordinates of the point:</strong></div>
            <div class="sol-math">\\[(x, y) = (0, -4)\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(a) \\((0, -4)\\)</strong></div>
          `
        },
        {
          id: 'P3_W3_A2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Minimum Value of Quadratic Function',
          prompt: '2) Find the minimum value of the function \\(f(x) = x^2 - 6x + 14\\).',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Identify coefficients of \\(f(x) = ax^2 + bx + c\\):</strong></div>
            <div class="sol-math">\\[a = 1, \\quad b = -6, \\quad c = 14\\]</div>
            <div class="sol-step"><strong>Step 2: Note the direction of opening:</strong></div>
            <div class="sol-math">\\[a = 1 > 0 \\implies \\text{The curve opens upwards, so } f(x) \\text{ has a minimum value at the vertex.}\\]</div>
            <div class="sol-step"><strong>Step 3: Calculate the x-coordinate of the vertex:</strong></div>
            <div class="sol-math">\\[x_v = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = \\frac{6}{2} = 3\\]</div>
            <div class="sol-step"><strong>Step 4: Find the minimum value \\(f(x_v)\\):</strong></div>
            <div class="sol-math">\\[f(3) = (3)^2 - 6(3) + 14 = 9 - 18 + 14 = 5\\]</div>
            <div class="sol-highlight">The minimum value of the function is <strong>5</strong> (at \\(x = 3\\))</div>
          `
        },
        {
          id: 'P3_W3_A3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Vertex Coordinate h of Quadratic Function',
          prompt: '3) If \\((h, k)\\) is the vertex of the curve for the function \\(f\\) where \\(f(x) = 2x^2 - 8x + 7\\), what is the value of \\(h\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Identify the formula for the vertex x-coordinate \\(h\\):</strong></div>
            <div class="sol-math">\\[h = -\\frac{b}{2a}\\]</div>
            <div class="sol-step"><strong>Step 2: Identify coefficients from \\(f(x) = 2x^2 - 8x + 7\\):</strong></div>
            <div class="sol-math">\\[a = 2, \\quad b = -8, \\quad c = 7\\]</div>
            <div class="sol-step"><strong>Step 3: Calculate \\(h\\):</strong></div>
            <div class="sol-math">\\[h = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2\\]</div>
            <div class="sol-highlight">The value of \\(h\\) is <strong>2</strong></div>
          `
        },
        {
          id: 'P3_W3_A4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Find Coefficient a from Vertex Coordinate',
          prompt: '4) If \\(-2\\) is the x-coordinate of the vertex of the curve for the function \\(f\\) where \\(f(x) = ax^2 + 12x + 7\\), what is the value of \\(a\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: State the vertex x-coordinate formula:</strong></div>
            <div class="sol-math">\\[x_v = -\\frac{b}{2a}\\]</div>
            <div class="sol-step"><strong>Step 2: Substitute given values \\(x_v = -2\\) and \\(b = 12\\):</strong></div>
            <div class="sol-math">\\[-2 = -\\frac{12}{2a} = -\\frac{6}{a}\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(a\\):</strong></div>
            <div class="sol-math">\\[-2a = -6 \\implies a = \\frac{-6}{-2} = 3\\]</div>
            <div class="sol-highlight">The value of \\(a\\) is <strong>3</strong></div>
          `
        },
        {
          id: 'P3_W3_A5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Graph Quadratic Function and Extrema',
          prompt: '5) Graph the function \\(f(x) = x^2 - x - 2\\) and find the maximum or minimum value of the function.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Determine vertex and opening direction:</strong></div>
            <div class="sol-math">\\[a = 1 > 0 \\implies \\text{Curve opens upwards } (\\cup), \\text{ hence it has a minimum value.}\\]</div>
            <div class="sol-math">\\[x_v = -\\frac{b}{2a} = -\\frac{-1}{2(1)} = \\frac{1}{2} = 0.5\\]</div>
            <div class="sol-math">\\[y_v = f(0.5) = (0.5)^2 - (0.5) - 2 = 0.25 - 0.5 - 2 = -2.25 = -\\frac{9}{4}\\]</div>
            <div class="sol-step"><strong>Step 2: Construct table of values around vertex (interval \\([-2, 3]\\)):</strong></div>
            <div class="sol-math">\\[
              \\begin{array}{|c|c|c|c|c|c|c|}
              \\hline
              x & -2 & -1 & 0 & 1 & 2 & 3 \\\\
              \\hline
              f(x) & 4 & 0 & -2 & -2 & 0 & 4 \\\\
              \\hline
              \\end{array}
            \\]</div>
            <div class="sol-step"><strong>Step 3: Properties of the curve:</strong></div>
            <div class="sol-math">\\[\\text{Vertex: } (0.5, -2.25), \\quad \\text{Axis of symmetry: } x = 0.5\\]</div>
            <div class="sol-highlight">The function has a <strong>minimum value = \\(-2.25\\)</strong> (or \\(-\\frac{9}{4}\\)) at \\(x = 0.5\\)</div>
          `
        }
      ]
    },
    groupB: {
      id: 'groupB',
      title: 'Group (B)',
      badgeName: 'Group (B) • Prep 3 • Week 4 Assessment',
      questions: [
        {
          id: 'P3_W3_B1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'y-intercept of Quadratic Function',
          prompt: '1) Which of the following is the y-intercept of the curve of the function \\(f(x) = x^2 - 3x - 5\\)?',
          options: [
            { key: 'a', text: '\\((0, 5)\\)', isCorrect: false },
            { key: 'b', text: '\\((0, -3)\\)', isCorrect: false },
            { key: 'c', text: '\\((0, 3)\\)', isCorrect: false },
            { key: 'd', text: '\\((0, -5)\\)', isCorrect: true }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set \\(x = 0\\) for the y-intercept:</strong></div>
            <div class="sol-math">\\[f(0) = (0)^2 - 3(0) - 5 = 0 - 0 - 5 = -5\\]</div>
            <div class="sol-step"><strong>Step 2: State the coordinates:</strong></div>
            <div class="sol-math">\\[(x, y) = (0, -5)\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(d) \\((0, -5)\\)</strong></div>
          `
        },
        {
          id: 'P3_W3_B2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Maximum Value of Quadratic Function',
          prompt: '2) Find the maximum value of the function \\(f(x) = -x^2 + 6x - 5\\).',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Identify coefficients:</strong></div>
            <div class="sol-math">\\[a = -1, \\quad b = 6, \\quad c = -5\\]</div>
            <div class="sol-step"><strong>Step 2: Check opening direction:</strong></div>
            <div class="sol-math">\\[a = -1 < 0 \\implies \\text{Curve opens downwards } (\\cap), \\text{ so it has a maximum value at the vertex.}\\]</div>
            <div class="sol-step"><strong>Step 3: Calculate vertex x-coordinate:</strong></div>
            <div class="sol-math">\\[x_v = -\\frac{b}{2a} = -\\frac{6}{2(-1)} = \\frac{-6}{-2} = 3\\]</div>
            <div class="sol-step"><strong>Step 4: Evaluate maximum value \\(f(3)\\):</strong></div>
            <div class="sol-math">\\[f(3) = -(3)^2 + 6(3) - 5 = -9 + 18 - 5 = 4\\]</div>
            <div class="sol-highlight">The maximum value of the function is <strong>4</strong> (at \\(x = 3\\))</div>
          `
        },
        {
          id: 'P3_W3_B3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Vertex Coordinate h of Quadratic Function',
          prompt: '3) If \\((h, k)\\) is the vertex of the curve for the function \\(f\\) where \\(f(x) = -3x^2 - 12x + 5\\), what is the value of \\(h\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Vertex x-coordinate formula:</strong></div>
            <div class="sol-math">\\[h = -\\frac{b}{2a}\\]</div>
            <div class="sol-step"><strong>Step 2: Identify \\(a = -3\\) and \\(b = -12\\):</strong></div>
            <div class="sol-math">\\[h = -\\frac{-12}{2(-3)} = \\frac{12}{-6} = -2\\]</div>
            <div class="sol-highlight">The value of \\(h\\) is <strong>-2</strong></div>
          `
        },
        {
          id: 'P3_W3_B4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Find Coefficient a from Vertex Coordinate',
          prompt: '4) If \\(-2\\) is the x-coordinate of the vertex of the curve for the function \\(f\\) where \\(f(x) = ax^2 + 14x + 7\\), what is the value of \\(a\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Write vertex formula:</strong></div>
            <div class="sol-math">\\[x_v = -\\frac{b}{2a}\\]</div>
            <div class="sol-step"><strong>Step 2: Substitute \\(x_v = -2\\) and \\(b = 14\\):</strong></div>
            <div class="sol-math">\\[-2 = -\\frac{14}{2a} = -\\frac{7}{a}\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(a\\):</strong></div>
            <div class="sol-math">\\[-2a = -7 \\implies a = \\frac{-7}{-2} = \\frac{7}{2} = 3.5\\]</div>
            <div class="sol-highlight">The value of \\(a\\) is <strong>3.5</strong> (or \\(\\frac{7}{2}\\))</div>
          `
        },
        {
          id: 'P3_W3_B5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Graph Quadratic Function and Extrema',
          prompt: '5) Graph the function \\(f(x) = x^2 + 3x + 2\\) and find the maximum or minimum value of the function.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Determine vertex and opening direction:</strong></div>
            <div class="sol-math">\\[a = 1 > 0 \\implies \\text{Curve opens upwards } (\\cup), \\text{ hence it has a minimum value.}\\]</div>
            <div class="sol-math">\\[x_v = -\\frac{b}{2a} = -\\frac{3}{2(1)} = -1.5\\]</div>
            <div class="sol-math">\\[y_v = f(-1.5) = (-1.5)^2 + 3(-1.5) + 2 = 2.25 - 4.5 + 2 = -0.25 = -\\frac{1}{4}\\]</div>
            <div class="sol-step"><strong>Step 2: Construct table of values (interval \\([-4, 1]\\)):</strong></div>
            <div class="sol-math">\\[
              \\begin{array}{|c|c|c|c|c|c|c|}
              \\hline
              x & -4 & -3 & -2 & -1 & 0 & 1 \\\\
              \\hline
              f(x) & 6 & 2 & 0 & 0 & 2 & 6 \\\\
              \\hline
              \\end{array}
            \\]</div>
            <div class="sol-step"><strong>Step 3: Properties:</strong></div>
            <div class="sol-math">\\[\\text{Vertex: } (-1.5, -0.25), \\quad \\text{Axis of symmetry: } x = -1.5\\]</div>
            <div class="sol-highlight">The function has a <strong>minimum value = \\(-0.25\\)</strong> (or \\(-\\frac{1}{4}\\)) at \\(x = -1.5\\)</div>
          `
        }
      ]
    },
    groupC: {
      id: 'groupC',
      title: 'Group (C)',
      badgeName: 'Group (C) • Prep 3 • Week 4 Assessment',
      questions: [
        {
          id: 'P3_W3_C1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'y-intercept of Quadratic Function',
          prompt: '1) Which of the following is the y-intercept of the curve of the function \\(f(x) = x^2 - 3x - 6\\)?',
          options: [
            { key: 'a', text: '\\((0, -3)\\)', isCorrect: false },
            { key: 'b', text: '\\((0, 6)\\)', isCorrect: false },
            { key: 'c', text: '\\((0, -6)\\)', isCorrect: true },
            { key: 'd', text: '\\((0, 3)\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set \\(x = 0\\) for the y-intercept:</strong></div>
            <div class="sol-math">\\[f(0) = (0)^2 - 3(0) - 6 = 0 - 0 - 6 = -6\\]</div>
            <div class="sol-step"><strong>Step 2: State coordinates:</strong></div>
            <div class="sol-math">\\[(x, y) = (0, -6)\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(c) \\((0, -6)\\)</strong></div>
          `
        },
        {
          id: 'P3_W3_C2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Minimum Value of Quadratic Function',
          prompt: '2) Find the minimum value of the function \\(f(x) = x^2 - 6x - 5\\).',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Identify coefficients:</strong></div>
            <div class="sol-math">\\[a = 1, \\quad b = -6, \\quad c = -5\\]</div>
            <div class="sol-step"><strong>Step 2: Check opening direction:</strong></div>
            <div class="sol-math">\\[a = 1 > 0 \\implies \\text{Curve opens upwards } (\\cup), \\text{ so it has a minimum value at the vertex.}\\]</div>
            <div class="sol-step"><strong>Step 3: Calculate vertex x-coordinate:</strong></div>
            <div class="sol-math">\\[x_v = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = \\frac{6}{2} = 3\\]</div>
            <div class="sol-step"><strong>Step 4: Find the minimum value:</strong></div>
            <div class="sol-math">\\[f(3) = (3)^2 - 6(3) - 5 = 9 - 18 - 5 = -14\\]</div>
            <div class="sol-highlight">The minimum value of the function is <strong>-14</strong> (at \\(x = 3\\))</div>
          `
        },
        {
          id: 'P3_W3_C3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Vertex Coordinate h of Quadratic Function',
          prompt: '3) If \\((h, k)\\) is the vertex of the curve for the function \\(f\\) where \\(f(x) = -4x^2 - 8x + 5\\), what is the value of \\(h\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: State vertex formula:</strong></div>
            <div class="sol-math">\\[h = -\\frac{b}{2a}\\]</div>
            <div class="sol-step"><strong>Step 2: Identify \\(a = -4\\) and \\(b = -8\\):</strong></div>
            <div class="sol-math">\\[h = -\\frac{-8}{2(-4)} = \\frac{8}{-8} = -1\\]</div>
            <div class="sol-highlight">The value of \\(h\\) is <strong>-1</strong></div>
          `
        },
        {
          id: 'P3_W3_C4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Find Coefficient a from Vertex Coordinate',
          prompt: '4) If \\(-2\\) is the x-coordinate of the vertex of the curve for the function \\(f\\) where \\(f(x) = ax^2 + 16x + 7\\), what is the value of \\(a\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Write vertex formula:</strong></div>
            <div class="sol-math">\\[x_v = -\\frac{b}{2a}\\]</div>
            <div class="sol-step"><strong>Step 2: Substitute \\(x_v = -2\\) and \\(b = 16\\):</strong></div>
            <div class="sol-math">\\[-2 = -\\frac{16}{2a} = -\\frac{8}{a}\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(a\\):</strong></div>
            <div class="sol-math">\\[-2a = -8 \\implies a = \\frac{-8}{-2} = 4\\]</div>
            <div class="sol-highlight">The value of \\(a\\) is <strong>4</strong></div>
          `
        },
        {
          id: 'P3_W4_C5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Graph Quadratic Function and Extrema',
          prompt: '5) Graph the function \\(f(x) = x^2 - 3x - 4\\) and find the maximum or minimum value of the function.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Determine vertex and opening direction:</strong></div>
            <div class="sol-math">\\[a = 1 > 0 \\implies \\text{Curve opens upwards } (\\cup), \\text{ hence it has a minimum value.}\\]</div>
            <div class="sol-math">\\[x_v = -\\frac{b}{2a} = -\\frac{-3}{2(1)} = \\frac{3}{2} = 1.5\\]</div>
            <div class="sol-math">\\[y_v = f(1.5) = (1.5)^2 - 3(1.5) - 4 = 2.25 - 4.5 - 4 = -6.25 = -\\frac{25}{4}\\]</div>
            <div class="sol-step"><strong>Step 2: Construct table of values around vertex (interval \\([-2, 5]\\)):</strong></div>
            <div class="sol-math">\\[
              \\begin{array}{|c|c|c|c|c|c|c|c|c|}
              \\hline
              x & -2 & -1 & 0 & 1 & 2 & 3 & 4 & 5 \\\\
              \\hline
              f(x) & 6 & 0 & -4 & -6 & -6 & -4 & 0 & 6 \\\\
              \\hline
              \\end{array}
            \\]</div>
            <div class="sol-step"><strong>Step 3: Properties of the curve:</strong></div>
            <div class="sol-math">\\[\\text{Vertex: } (1.5, -6.25), \\quad \\text{Axis of symmetry: } x = 1.5\\]</div>
            <div class="sol-highlight">The function has a <strong>minimum value = \\(-6.25\\)</strong> (or \\(-\\frac{25}{4}\\)) at \\(x = 1.5\\)</div>
          `
        }
      ]
    }
  },

  // ========================================================================
  // PREP 3 • WEEK 5: ZEROS OF A POLYNOMIAL FUNCTION
  // Official Egyptian Curriculum 2026/2027 • Grade 9 / Prep 3
  // ========================================================================
  prep3_week5: {
    id: 'prep3_week5',
    title: 'Prep 3 • Week 5: Zeros of a Polynomial Function',
    stageName: 'Prep 3 (Grade 9) • Week 5: Zeros of a Polynomial Function',
    groupA: {
      id: 'groupA',
      title: 'Group (A)',
      badgeName: 'Group (A) • Prep 3 • Week 5 Assessment',
      questions: [
        {
          id: 'P3_W5_A1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Zeros of a Linear Function',
          prompt: '1) What is the set of real zeros of the function \\(f(x) = x - 4\\)?',
          options: [
            { key: 'a', text: '\\(\\{-4\\}\\)', isCorrect: false },
            { key: 'b', text: '\\(\\{4\\}\\)', isCorrect: true },
            { key: 'c', text: '\\(\\{-2\\}\\)', isCorrect: false },
            { key: 'd', text: '\\(\\{2\\}\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set the function equal to zero:</strong></div>
            <div class="sol-math">\\[f(x) = 0 \\implies x - 4 = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = 4\\]</div>
            <div class="sol-step"><strong>Step 3: Write in set notation \\(Z(f)\\):</strong></div>
            <div class="sol-math">\\[Z(f) = \\{4\\}\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) \\(\\{4\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_A2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Zeros of a Non-Zero Constant Function',
          prompt: '2) What is the set of real zeros of the function \\(g(x) = -5\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Recall the definition of the set of zeros \\(Z(g)\\):</strong></div>
            <div class="sol-step">We look for values of \\(x \\in \\mathbb{R}\\) that satisfy \\(g(x) = 0\\).</div>
            <div class="sol-step"><strong>Step 2: Examine the given constant function:</strong></div>
            <div class="sol-math">\\[g(x) = -5 \\neq 0 \\quad \\text{for all } x \\in \\mathbb{R}\\]</div>
            <div class="sol-step">Since \\(-5\\) can never equal \\(0\\), there are no real values of \\(x\\) where \\(g(x) = 0\\).</div>
            <div class="sol-highlight">The set of real zeros is the empty set: <strong>\\(Z(g) = \\phi\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_A3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Zeros of a Monomial Function',
          prompt: '3) What is the set of real zeros of the function \\(p(x) = -11x\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set the function equal to zero:</strong></div>
            <div class="sol-math">\\[p(x) = 0 \\implies -11x = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Divide both sides by \\(-11\\):</strong></div>
            <div class="sol-math">\\[x = \\frac{0}{-11} = 0\\]</div>
            <div class="sol-highlight">The set of real zeros is <strong>\\(Z(p) = \\{0\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_A4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Zeros of a Quadratic Trinomial',
          prompt: '4) Find the set of real zeros of the function \\(f(x) = x^2 - x - 2\\).',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set the quadratic function equal to zero:</strong></div>
            <div class="sol-math">\\[x^2 - x - 2 = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Factorize the quadratic trinomial:</strong></div>
            <div class="sol-step">Find two numbers whose product is \\(-2\\) and sum is \\(-1\\) (they are \\(-2\\) and \\(+1\\)):</div>
            <div class="sol-math">\\[(x - 2)(x + 1) = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x - 2 = 0 \\implies x = 2\\]</div>
            <div class="sol-math">\\[x + 1 = 0 \\implies x = -1\\]</div>
            <div class="sol-highlight">The set of real zeros is <strong>\\(Z(f) = \\{2, -1\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_A5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Find the Unknown Coefficient b Given a Zero',
          prompt: '5) If \\(-2\\) is one of the zeros of the function \\(f(x) = x^2 + bx - 14\\), what is the value of \\(b\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Use the definition of a zero of a function:</strong></div>
            <div class="sol-step">Since \\(-2\\) is a zero of \\(f(x)\\), then \\(f(-2) = 0\\).</div>
            <div class="sol-step"><strong>Step 2: Substitute \\(x = -2\\) into the equation:</strong></div>
            <div class="sol-math">\\[(-2)^2 + b(-2) - 14 = 0\\]</div>
            <div class="sol-math">\\[4 - 2b - 14 = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify and solve for \\(b\\):</strong></div>
            <div class="sol-math">\\[-2b - 10 = 0 \\implies -2b = 10\\]</div>
            <div class="sol-math">\\[b = \\frac{10}{-2} = -5\\]</div>
            <div class="sol-step"><em>Check:</em> \\((-2)^2 + (-5)(-2) - 14 = 4 + 10 - 14 = 0\\) \\(\\checkmark\\)</div>
            <div class="sol-highlight">The value of \\(b\\) is <strong>\\(b = -5\\)</strong></div>
          `
        }
      ]
    },
    groupB: {
      id: 'groupB',
      title: 'Group (B)',
      badgeName: 'Group (B) • Prep 3 • Week 5 Assessment',
      questions: [
        {
          id: 'P3_W5_B1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Zeros of a Linear Function',
          prompt: '1) What is the set of real zeros of the function \\(f(x) = x + 5\\)?',
          options: [
            { key: 'a', text: '\\(\\{-5\\}\\)', isCorrect: true },
            { key: 'b', text: '\\(\\{5\\}\\)', isCorrect: false },
            { key: 'c', text: '\\(\\{0\\}\\)', isCorrect: false },
            { key: 'd', text: '\\(\\{1\\}\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set the function equal to zero:</strong></div>
            <div class="sol-math">\\[f(x) = 0 \\implies x + 5 = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = -5\\]</div>
            <div class="sol-step"><strong>Step 3: Write in set notation \\(Z(f)\\):</strong></div>
            <div class="sol-math">\\[Z(f) = \\{-5\\}\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(a) \\(\\{-5\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_B2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Zeros of a Non-Zero Constant Function',
          prompt: '2) What is the set of real zeros of the function \\(g(x) = 10\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Recall the definition of the set of zeros \\(Z(g)\\):</strong></div>
            <div class="sol-step">We seek all values of \\(x \\in \\mathbb{R}\\) where \\(g(x) = 0\\).</div>
            <div class="sol-step"><strong>Step 2: Analyze the constant function:</strong></div>
            <div class="sol-math">\\[g(x) = 10 \\neq 0 \\quad \\text{for all } x \\in \\mathbb{R}\\]</div>
            <div class="sol-step">The constant value \\(10\\) can never equal zero for any input \\(x\\).</div>
            <div class="sol-highlight">The set of real zeros is the empty set: <strong>\\(Z(g) = \\phi\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_B3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Zeros of a Monomial Function',
          prompt: '3) What is the set of real zeros of the function \\(p(x) = -12x\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set the function equal to zero:</strong></div>
            <div class="sol-math">\\[p(x) = 0 \\implies -12x = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = \\frac{0}{-12} = 0\\]</div>
            <div class="sol-highlight">The set of real zeros is <strong>\\(Z(p) = \\{0\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_B4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Zeros of a Perfect Square Trinomial',
          prompt: '4) Find the set of real zeros of the function \\(f(x) = x^2 + 2x + 1\\).',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set the function equal to zero:</strong></div>
            <div class="sol-math">\\[x^2 + 2x + 1 = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Factorize as a perfect square trinomial:</strong></div>
            <div class="sol-math">\\[(x + 1)^2 = 0 \\implies x + 1 = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = -1\\]</div>
            <div class="sol-step">Since elements are written without repetition in sets:</div>
            <div class="sol-highlight">The set of real zeros is <strong>\\(Z(f) = \\{-1\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_B5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Find the Unknown Coefficient b Given a Zero',
          prompt: '5) If \\(-2\\) is one of the zeros of the function \\(f(x) = x^2 + bx - 10\\), what is the value of \\(b\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Apply zero of function definition:</strong></div>
            <div class="sol-step">If \\(-2\\) is a zero of \\(f\\), then \\(f(-2) = 0\\).</div>
            <div class="sol-step"><strong>Step 2: Substitute \\(x = -2\\) into the equation:</strong></div>
            <div class="sol-math">\\[(-2)^2 + b(-2) - 10 = 0\\]</div>
            <div class="sol-math">\\[4 - 2b - 10 = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify and solve for \\(b\\):</strong></div>
            <div class="sol-math">\\[-2b - 6 = 0 \\implies -2b = 6\\]</div>
            <div class="sol-math">\\[b = \\frac{6}{-2} = -3\\]</div>
            <div class="sol-step"><em>Check:</em> \\((-2)^2 + (-3)(-2) - 10 = 4 + 6 - 10 = 0\\) \\(\\checkmark\\)</div>
            <div class="sol-highlight">The value of \\(b\\) is <strong>\\(b = -3\\)</strong></div>
          `
        }
      ]
    },
    groupC: {
      id: 'groupC',
      title: 'Group (C)',
      badgeName: 'Group (C) • Prep 3 • Week 5 Assessment',
      questions: [
        {
          id: 'P3_W5_C1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Zeros of a Linear Function',
          prompt: '1) What is the set of real zeros of the function \\(f(x) = x - 2\\)?',
          options: [
            { key: 'a', text: '\\(\\{-2\\}\\)', isCorrect: false },
            { key: 'b', text: '\\(\\{2\\}\\)', isCorrect: true },
            { key: 'c', text: '\\(\\{4\\}\\)', isCorrect: false },
            { key: 'd', text: '\\(\\{-4\\}\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set the function equal to zero:</strong></div>
            <div class="sol-math">\\[f(x) = 0 \\implies x - 2 = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = 2\\]</div>
            <div class="sol-step"><strong>Step 3: Write in set notation \\(Z(f)\\):</strong></div>
            <div class="sol-math">\\[Z(f) = \\{2\\}\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) \\(\\{2\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_C2',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 2,
          title: 'Zeros of a Non-Zero Constant Function',
          prompt: '2) What is the set of real zeros of the function \\(g(x) = 15\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Definition of the set of zeros \\(Z(g)\\):</strong></div>
            <div class="sol-step">Values of \\(x \\in \\mathbb{R}\\) where \\(g(x) = 0\\).</div>
            <div class="sol-step"><strong>Step 2: Analyze the constant function:</strong></div>
            <div class="sol-math">\\[g(x) = 15 \\neq 0 \\quad \\text{for all } x \\in \\mathbb{R}\\]</div>
            <div class="sol-step">Since \\(15 \\neq 0\\) always, no real input produces zero.</div>
            <div class="sol-highlight">The set of real zeros is the empty set: <strong>\\(Z(g) = \\phi\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_C3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Zeros of a Monomial Function',
          prompt: '3) What is the set of real zeros of the function \\(p(x) = 8x\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set the function equal to zero:</strong></div>
            <div class="sol-math">\\[p(x) = 0 \\implies 8x = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = \\frac{0}{8} = 0\\]</div>
            <div class="sol-highlight">The set of real zeros is <strong>\\(Z(p) = \\{0\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_C4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Zeros of a Quadratic Trinomial',
          prompt: '4) Find the set of real zeros of the function \\(f(x) = x^2 + 2x - 3\\).',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set the quadratic function equal to zero:</strong></div>
            <div class="sol-math">\\[x^2 + 2x - 3 = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Factorize the trinomial:</strong></div>
            <div class="sol-step">Find two numbers whose product is \\(-3\\) and sum is \\(+2\\) (they are \\(+3\\) and \\(-1\\)):</div>
            <div class="sol-math">\\[(x + 3)(x - 1) = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x + 3 = 0 \\implies x = -3\\]</div>
            <div class="sol-math">\\[x - 1 = 0 \\implies x = 1\\]</div>
            <div class="sol-highlight">The set of real zeros is <strong>\\(Z(f) = \\{-3, 1\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W5_C5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Find the Unknown Coefficient b Given a Zero',
          prompt: '5) If \\(-2\\) is one of the zeros of the function \\(f(x) = x^2 + bx - 8\\), what is the value of \\(b\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Apply zero of function definition:</strong></div>
            <div class="sol-step">Since \\(-2\\) is a zero of \\(f\\), then \\(f(-2) = 0\\).</div>
            <div class="sol-step"><strong>Step 2: Substitute \\(x = -2\\) into the equation:</strong></div>
            <div class="sol-math">\\[(-2)^2 + b(-2) - 8 = 0\\]</div>
            <div class="sol-math">\\[4 - 2b - 8 = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify and solve for \\(b\\):</strong></div>
            <div class="sol-math">\\[-2b - 4 = 0 \\implies -2b = 4\\]</div>
            <div class="sol-math">\\[b = \\frac{4}{-2} = -2\\]</div>
            <div class="sol-step"><em>Check:</em> \\((-2)^2 + (-2)(-2) - 8 = 4 + 4 - 8 = 0\\) \\(\\checkmark\\)</div>
            <div class="sol-highlight">The value of \\(b\\) is <strong>\\(b = -2\\)</strong></div>
          `
        }
      ]
    }
  },

  // ========================================================================
  // PREP 3 • WEEK 6: RATIONAL ALGEBRAIC FUNCTIONS
  // Official Egyptian Curriculum 2026/2027 • Grade 9 / Prep 3
  // ========================================================================
  prep3_week6: {
    id: 'prep3_week6',
    title: 'Prep 3 • Week 6: Rational Algebraic Functions',
    stageName: 'Prep 3 (Grade 9) • Week 6: Rational Algebraic Functions',
    groupA: {
      id: 'groupA',
      title: 'Group (A)',
      badgeName: 'Group (A) • Prep 3 • Week 6 Assessment',
      questions: [
        {
          id: 'P3_W6_A1',
          type: 'mcq',
          category: 'First: Choose the correct answer from the given choices',
          questionNum: 1,
          title: 'Find Unknown Parameter from Rational Function Domain',
          prompt: '1) If the domain of the rational algebraic function \\(f(x) = \\frac{2x}{x - a}\\) is \\(\\mathbb{R} - \\{-2\\}\\), what is the value of \\(a\\)?',
          options: [
            { key: 'a', text: '1', isCorrect: false },
            { key: 'b', text: '-1', isCorrect: false },
            { key: 'c', text: '2', isCorrect: false },
            { key: 'd', text: '-2', isCorrect: true }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Recall the definition of the domain of a rational function:</strong></div>
            <div class="sol-math">\\[\\text{Domain of } f = \\mathbb{R} - \\{\\text{zeros of the denominator}\\}\\]</div>
            <div class="sol-step"><strong>Step 2: Relate the given domain to the denominator:</strong></div>
            <div class="sol-step">The domain is given as \\(\\mathbb{R} - \\{-2\\}\\), which means \\(x = -2\\) makes the denominator equal to zero:</div>
            <div class="sol-math">\\[x - a = 0 \\quad \\text{when } x = -2\\]</div>
            <div class="sol-step"><strong>Step 3: Substitute \\(x = -2\\) and solve for \\(a\\):</strong></div>
            <div class="sol-math">\\[-2 - a = 0 \\implies -a = 2 \\implies a = -2\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(d) -2</strong></div>
          `
        },
        {
          id: 'P3_W6_A2',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 2,
          title: 'Values Making a Rational Fraction Undefined',
          prompt: '2) Find the set of values of \\(\\frac{2x + 7}{x^2 - x - 12}\\) that make the rational fraction \\(g(1)\\) undefined in \\(\\mathbb{R}\\).',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Understand when a rational fraction is undefined:</strong></div>
            <div class="sol-step">A rational fraction is undefined in \\(\\mathbb{R}\\) when its denominator equals zero:</div>
            <div class="sol-math">\\[x^2 - x - 12 = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Factorize the quadratic denominator:</strong></div>
            <div class="sol-step">Find two numbers whose product is \\(-12\\) and whose sum is \\(-1\\) (they are \\(-4\\) and \\(+3\\)):</div>
            <div class="sol-math">\\[(x - 4)(x + 3) = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x - 4 = 0 \\implies x = 4\\]</div>
            <div class="sol-math">\\[x + 3 = 0 \\implies x = -3\\]</div>
            <div class="sol-highlight">The set of values that make the fraction undefined is <strong>\\(\\{4, -3\\}\\)</strong></div>
            <div class="sol-step" style="margin-top: 0.6rem; color: #64748b; font-size: 0.95rem;">
              <em>Clarification:</em> The printed symbol "\\(g(1)\\)" is a typographical misplacement intended for Question 3 ("then find \\(g(1)\\) if possible"). The fraction is undefined when its denominator is zero.
            </div>
          `
        },
        {
          id: 'P3_W6_A3',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 3,
          title: 'Domain of Rational Function & Value Evaluation',
          prompt: '3) Find the domain of the function \\(g(x) = \\frac{x^2 - 4}{x^2 - x - 2}\\), then find \\(g(1)\\) if possible.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Find the zeros of the denominator:</strong></div>
            <div class="sol-math">\\[x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0 \\implies x = 2 \\quad \\text{or} \\quad x = -1\\]</div>
            <div class="sol-step"><strong>Step 2: Determine the domain:</strong></div>
            <div class="sol-math">\\[\\text{Domain of } g = \\mathbb{R} - \\{2, -1\\}\\]</div>
            <div class="sol-step"><strong>Step 3: Evaluate \\(g(1)\\) (the value misplaced in Q2):</strong></div>
            <div class="sol-step">Since \\(1 \\in \\text{Domain of } g\\) (because \\(1 \\neq 2\\) and \\(1 \\neq -1\\)), \\(g(1)\\) is defined:</div>
            <div class="sol-math">\\[g(1) = \\frac{1^2 - 4}{1^2 - 1 - 2} = \\frac{1 - 4}{1 - 1 - 2} = \\frac{-3}{-2} = \\frac{3}{2} = 1.5\\]</div>
            <div class="sol-divider">ALTERNATIVE: IF EVALUATING AT EXCLUDED VALUE</div>
            <div class="sol-step"><strong>If evaluating at the excluded value \\(x = 2\\) (as in Model B \\(f(4)\\) & Model C \\(f(2)\\)):</strong></div>
            <div class="sol-step">Since \\(2 \\notin \\text{Domain of } g\\), \\(g(2)\\) is <strong>undefined</strong> (does not exist).</div>
            <div class="sol-highlight">Domain = <strong>\\(\\mathbb{R} - \\{2, -1\\}\\)</strong> &nbsp;|&nbsp; <strong>\\(g(1) = \\frac{3}{2}\\)</strong> &nbsp;|&nbsp; <strong>\\(g(2)\\) is undefined</strong></div>
          `
        },
        {
          id: 'P3_W6_A4',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 4,
          title: 'Simplifying Rational Function & Stating its Domain',
          prompt: '4) Simplify the following function to its simplest form and state its domain: \\(f(x) = \\frac{x^2 + 5x + 6}{x^2 - x - 6}\\)',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Factorize both the numerator and the denominator completely:</strong></div>
            <div class="sol-math">\\[\\text{Numerator: } x^2 + 5x + 6 = (x + 2)(x + 3)\\]</div>
            <div class="sol-math">\\[\\text{Denominator: } x^2 - x - 6 = (x - 3)(x + 2)\\]</div>
            <div class="sol-step"><strong>Step 2: State the domain BEFORE cancelling any common factors:</strong></div>
            <div class="sol-step">Set denominator \\(= 0 \\implies (x - 3)(x + 2) = 0 \\implies x = 3 \\text{ or } x = -2\\):</div>
            <div class="sol-math">\\[\\text{Domain of } f = \\mathbb{R} - \\{3, -2\\}\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify by cancelling the common factor \\((x + 2)\\):</strong></div>
            <div class="sol-math">\\[f(x) = \\frac{(x + 2)(x + 3)}{(x - 3)(x + 2)} = \\frac{x + 3}{x - 3}\\]</div>
            <div class="sol-highlight">Simplest Form: <strong>\\(f(x) = \\frac{x + 3}{x - 3}\\)</strong> &nbsp;|&nbsp; Domain = <strong>\\(\\mathbb{R} - \\{3, -2\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W6_A5',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 5,
          title: 'Set of Zeroes of a Rational Function',
          prompt: '5) Find the set of zeroes of the function: \\(f(x) = \\frac{x^2 - 5x}{x^2 - 25}\\)',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Factorize numerator \\(N(x)\\) and denominator \\(D(x)\\):</strong></div>
            <div class="sol-math">\\[N(x) = x^2 - 5x = x(x - 5) \\implies Z(N) = \\{0, 5\\}\\]</div>
            <div class="sol-math">\\[D(x) = x^2 - 25 = (x - 5)(x + 5) \\implies Z(D) = \\{5, -5\\}\\]</div>
            <div class="sol-step"><strong>Step 2: State the domain of \\(f\\):</strong></div>
            <div class="sol-math">\\[\\text{Domain} = \\mathbb{R} - Z(D) = \\mathbb{R} - \\{5, -5\\}\\]</div>
            <div class="sol-step"><strong>Step 3: Apply the rule for the zeroes of a rational function \\(Z(f) = Z(N) - Z(D)\\):</strong></div>
            <div class="sol-math">\\[Z(f) = \\{0, 5\\} - \\{5, -5\\} = \\{0\\}\\]</div>
            <div class="sol-step"><em>Reason:</em> Although \\(x = 5\\) makes the numerator zero, it also makes the denominator zero, so \\(5 \\notin \\text{Domain}\\).</div>
            <div class="sol-highlight">The set of zeroes is <strong>\\(Z(f) = \\{0\\}\\)</strong></div>
          `
        }
      ]
    },
    groupB: {
      id: 'groupB',
      title: 'Group (B)',
      badgeName: 'Group (B) • Prep 3 • Week 6 Assessment',
      questions: [
        {
          id: 'P3_W6_B1',
          type: 'mcq',
          category: 'First: Choose the correct answer from the given choices',
          questionNum: 1,
          title: 'Find Unknown Parameter from Rational Function Domain',
          prompt: '1) If the domain of the function \\(f(x) = \\frac{3}{x - a}\\) is \\(\\mathbb{R} - \\{5\\}\\), then the value of \\(a\\) equals:',
          options: [
            { key: 'a', text: '3', isCorrect: false },
            { key: 'b', text: '-5', isCorrect: false },
            { key: 'c', text: '5', isCorrect: true },
            { key: 'd', text: '-3', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Definition of domain of a rational function:</strong></div>
            <div class="sol-math">\\[\\text{Domain} = \\mathbb{R} - \\{\\text{zeros of denominator}\\}\\]</div>
            <div class="sol-step"><strong>Step 2: Set the denominator equal to zero at \\(x = 5\\):</strong></div>
            <div class="sol-math">\\[x - a = 0 \\implies 5 - a = 0 \\implies a = 5\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(c) 5</strong></div>
          `
        },
        {
          id: 'P3_W6_B2',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 2,
          title: 'Values Making a Rational Fraction Undefined',
          prompt: '2) Determine the values that make the fraction \\(\\frac{x^2 + x}{x^2 - 16}\\) undefined in \\(\\mathbb{R}\\).',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Condition for undefined rational expression:</strong></div>
            <div class="sol-step">A fraction is undefined when its denominator is zero:</div>
            <div class="sol-math">\\[x^2 - 16 = 0\\]</div>
            <div class="sol-step"><strong>Step 2: Factorize difference of two squares:</strong></div>
            <div class="sol-math">\\[(x - 4)(x + 4) = 0\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = 4 \\quad \\text{or} \\quad x = -4\\]</div>
            <div class="sol-highlight">The values that make the fraction undefined are <strong>\\(\\{4, -4\\}\\)</strong> (or \\(\\pm 4\\))</div>
          `
        },
        {
          id: 'P3_W6_B3',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 3,
          title: 'Domain of Rational Function & Value Evaluation',
          prompt: '3) Find the domain of the function \\(f(x) = \\frac{x^2 - 16}{x^2 - 6x + 8}\\), then find \\(f(4)\\) if possible.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Find the zeros of the denominator:</strong></div>
            <div class="sol-math">\\[x^2 - 6x + 8 = 0 \\implies (x - 4)(x - 2) = 0 \\implies x = 4 \\quad \\text{or} \\quad x = 2\\]</div>
            <div class="sol-step"><strong>Step 2: State the domain of \\(f\\):</strong></div>
            <div class="sol-math">\\[\\text{Domain of } f = \\mathbb{R} - \\{4, 2\\}\\]</div>
            <div class="sol-step"><strong>Step 3: Evaluate \\(f(4)\\):</strong></div>
            <div class="sol-step">Since \\(4 \\notin \\text{Domain of } f\\) (it makes the denominator zero), \\(f(4)\\) is undefined:</div>
            <div class="sol-math">\\[f(4) \\text{ is undefined (does not exist / not possible)}\\]</div>
            <div class="sol-highlight">Domain = <strong>\\(\\mathbb{R} - \\{2, 4\\}\\)</strong> &nbsp;|&nbsp; <strong>\\(f(4)\\) is undefined</strong></div>
          `
        },
        {
          id: 'P3_W6_B4',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 4,
          title: 'Simplifying Rational Function with Difference of Cubes',
          prompt: '4) Simplify the following function \\(h(x) = \\frac{x^3 - 1}{x^2 - 1}\\) to its simplest form and state its domain.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Factorize numerator (difference of cubes) and denominator (difference of squares):</strong></div>
            <div class="sol-math">\\[x^3 - 1 = (x - 1)(x^2 + x + 1)\\]</div>
            <div class="sol-math">\\[x^2 - 1 = (x - 1)(x + 1)\\]</div>
            <div class="sol-step"><strong>Step 2: State the domain before cancelling:</strong></div>
            <div class="sol-math">\\[\\text{Denominator } = 0 \\implies (x - 1)(x + 1) = 0 \\implies x = 1 \\text{ or } x = -1\\]</div>
            <div class="sol-math">\\[\\text{Domain of } h = \\mathbb{R} - \\{1, -1\\}\\]</div>
            <div class="sol-step"><strong>Step 3: Cancel the common factor \\((x - 1)\\):</strong></div>
            <div class="sol-math">\\[h(x) = \\frac{(x - 1)(x^2 + x + 1)}{(x - 1)(x + 1)} = \\frac{x^2 + x + 1}{x + 1}\\]</div>
            <div class="sol-step"><em>Note:</em> \\(x^2 + x + 1\\) has no real zeros (\\(\\Delta = 1 - 4 = -3 < 0\\)).</div>
            <div class="sol-highlight">Simplest Form: <strong>\\(h(x) = \\frac{x^2 + x + 1}{x + 1}\\)</strong> &nbsp;|&nbsp; Domain = <strong>\\(\\mathbb{R} - \\{1, -1\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W6_B5',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 5,
          title: 'Set of Zeroes of a Rational Function',
          prompt: '5) Find the set of zeroes of the function: \\(f(x) = \\frac{2x^2 + 5x - 3}{x^2 + x - 6}\\)',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Factorize numerator \\(N(x)\\):</strong></div>
            <div class="sol-math">\\[2x^2 + 5x - 3 = (2x - 1)(x + 3)\\]</div>
            <div class="sol-math">\\[Z(N) = \\left\\{\\frac{1}{2}, -3\\right\\}\\]</div>
            <div class="sol-step"><strong>Step 2: Factorize denominator \\(D(x)\\):</strong></div>
            <div class="sol-math">\\[x^2 + x - 6 = (x + 3)(x - 2)\\]</div>
            <div class="sol-math">\\[Z(D) = \\{-3, 2\\}\\]</div>
            <div class="sol-step"><strong>Step 3: Find the zeroes of the rational function \\(Z(f) = Z(N) - Z(D)\\):</strong></div>
            <div class="sol-math">\\[Z(f) = \\left\\{\\frac{1}{2}, -3\\right\\} - \\{-3, 2\\} = \\left\\{\\frac{1}{2}\\right\\}\\]</div>
            <div class="sol-step"><em>Explanation:</em> \\(x = -3\\) is rejected because it makes the denominator zero (\\(-3 \\notin \\text{Domain}\\)).</div>
            <div class="sol-highlight">The set of zeroes is <strong>\\(Z(f) = \\left\\{\\frac{1}{2}\\right\\}\\)</strong></div>
          `
        }
      ]
    },
    groupC: {
      id: 'groupC',
      title: 'Group (C)',
      badgeName: 'Group (C) • Prep 3 • Week 6 Assessment',
      questions: [
        {
          id: 'P3_W6_C1',
          type: 'mcq',
          category: 'First: Choose the correct answer from the given choices',
          questionNum: 1,
          title: 'Set of Zeroes of a Rational Function',
          prompt: '1) The set of zeroes of the function \\(f(x) = \\frac{x - 2}{x^2 - 4}\\) is:',
          options: [
            { key: 'a', text: '\\(\\{2\\}\\)', isCorrect: false },
            { key: 'b', text: '\\(\\emptyset\\)', isCorrect: true },
            { key: 'c', text: '\\(\\{-2, 2\\}\\)', isCorrect: false },
            { key: 'd', text: '\\(\\{-2\\}\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Factorize numerator and denominator:</strong></div>
            <div class="sol-math">\\[f(x) = \\frac{x - 2}{(x - 2)(x + 2)}\\]</div>
            <div class="sol-step"><strong>Step 2: Find zeros of numerator and denominator:</strong></div>
            <div class="sol-math">\\[Z(N) = \\{2\\}, \\quad Z(D) = \\{2, -2\\}\\]</div>
            <div class="sol-step"><strong>Step 3: Apply the zero formula \\(Z(f) = Z(N) - Z(D)\\):</strong></div>
            <div class="sol-math">\\[Z(f) = \\{2\\} - \\{2, -2\\} = \\emptyset\\]</div>
            <div class="sol-step">Since \\(x = 2\\) makes the denominator zero, it is excluded from the domain; no value makes \\(f(x) = 0\\).</div>
            <div class="sol-highlight">The correct answer is <strong>(b) \\(\\emptyset\\)</strong></div>
          `
        },
        {
          id: 'P3_W6_C2',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 2,
          title: 'Denominator that Never Equals Zero in R',
          prompt: '2) Find the set of values of \\(x\\) that make the fraction \\(\\frac{5x - 1}{x^2 + 4}\\) undefined in \\(\\mathbb{R}\\).',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set the denominator equal to zero:</strong></div>
            <div class="sol-math">\\[x^2 + 4 = 0 \\implies x^2 = -4\\]</div>
            <div class="sol-step"><strong>Step 2: Analyze over the real numbers \\(\\mathbb{R}\\):</strong></div>
            <div class="sol-step">The square of any real number is always non-negative: \\(x^2 \\ge 0\\), so \\(x^2 + 4 \\ge 4 > 0\\) for all \\(x \\in \\mathbb{R}\\).</div>
            <div class="sol-step">There is no real number that satisfies \\(x^2 = -4\\). Therefore, the denominator is never zero.</div>
            <div class="sol-highlight">The set of values that make the fraction undefined is <strong>\\(\\emptyset\\)</strong> (or \\(\\phi\\))</div>
          `
        },
        {
          id: 'P3_W6_C3',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 3,
          title: 'Domain of Rational Function & Undefined Value',
          prompt: '3) Determine the domain of the function \\(f(x) = \\frac{2x}{x^2 - 2x}\\), then find \\(f(2)\\) if possible.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Find the zeros of the denominator:</strong></div>
            <div class="sol-math">\\[x^2 - 2x = 0 \\implies x(x - 2) = 0 \\implies x = 0 \\quad \\text{or} \\quad x = 2\\]</div>
            <div class="sol-step"><strong>Step 2: State the domain:</strong></div>
            <div class="sol-math">\\[\\text{Domain of } f = \\mathbb{R} - \\{0, 2\\}\\]</div>
            <div class="sol-step"><strong>Step 3: Evaluate \\(f(2)\\):</strong></div>
            <div class="sol-step">Since \\(2 \\notin \\text{Domain of } f\\) (it makes the denominator zero), \\(f(2)\\) is undefined:</div>
            <div class="sol-math">\\[f(2) \\text{ is undefined (not possible / does not exist)}\\]</div>
            <div class="sol-highlight">Domain = <strong>\\(\\mathbb{R} - \\{0, 2\\}\\)</strong> &nbsp;|&nbsp; <strong>\\(f(2)\\) is undefined</strong></div>
          `
        },
        {
          id: 'P3_W6_C4',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 4,
          title: 'Simplifying Rational Function & Domain',
          prompt: '4) Simplify the following function to its simplest form and state its domain: \\(f(x) = \\frac{3x - 15}{x^2 - 10x + 25}\\)',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Factorize numerator and denominator completely:</strong></div>
            <div class="sol-math">\\[\\text{Numerator: } 3x - 15 = 3(x - 5)\\]</div>
            <div class="sol-math">\\[\\text{Denominator: } x^2 - 10x + 25 = (x - 5)^2\\]</div>
            <div class="sol-step"><strong>Step 2: Determine domain before cancelling:</strong></div>
            <div class="sol-math">\\[(x - 5)^2 = 0 \\implies x - 5 = 0 \\implies x = 5\\]</div>
            <div class="sol-math">\\[\\text{Domain of } f = \\mathbb{R} - \\{5\\}\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify by cancelling \\((x - 5)\\):</strong></div>
            <div class="sol-math">\\[f(x) = \\frac{3(x - 5)}{(x - 5)^2} = \\frac{3}{x - 5}\\]</div>
            <div class="sol-highlight">Simplest Form: <strong>\\(f(x) = \\frac{3}{x - 5}\\)</strong> &nbsp;|&nbsp; Domain = <strong>\\(\\mathbb{R} - \\{5\\}\\)</strong></div>
          `
        },
        {
          id: 'P3_W6_C5',
          type: 'problem',
          category: 'Second: Answer the following questions',
          questionNum: 5,
          title: 'Solving Rational Equation in R',
          prompt: '5) If \\(g(x) = \\frac{x^2 - 9}{x - 3}\\), find the solution set of the equation \\(g(x) = 8\\) in \\(\\mathbb{R}\\).',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: State the domain of \\(g(x)\\):</strong></div>
            <div class="sol-math">\\[x - 3 = 0 \\implies x = 3 \\implies \\text{Domain of } g = \\mathbb{R} - \\{3\\}\\]</div>
            <div class="sol-step"><strong>Step 2: Simplify \\(g(x)\\) for \\(x \\neq 3\\):</strong></div>
            <div class="sol-math">\\[g(x) = \\frac{(x - 3)(x + 3)}{x - 3} = x + 3 \\quad (x \\neq 3)\\]</div>
            <div class="sol-step"><strong>Step 3: Set up and solve the equation \\(g(x) = 8\\):</strong></div>
            <div class="sol-math">\\[x + 3 = 8 \\implies x = 8 - 3 = 5\\]</div>
            <div class="sol-step"><strong>Step 4: Check if the solution is in the domain:</strong></div>
            <div class="sol-step">Since \\(5 \\in \\mathbb{R} - \\{3\\}\\) (\\(5 \\neq 3\\)), \\(x = 5\\) is an acceptable valid solution.</div>
            <div class="sol-step"><em>Check:</em> \\(g(5) = \\frac{5^2 - 9}{5 - 3} = \\frac{16}{2} = 8\\) \\(\\checkmark\\)</div>
            <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) = <strong>\\(\\{5\\}\\)</strong></div>
          `
        }
      ]
    }
  },

  // ========================================================================
  // PREP 1 • WEEK 2: PROPORTION & SCALE DRAWING
  // ========================================================================
  week2: {
    id: 'week2',
    title: 'Prep 1 • Week 2: Proportion & Scale Drawing',
    stageName: 'Prep 1 (Grade 7) • Week 2: Proportion & Scale Drawing',
    groupA: {
      id: 'groupA',
      title: 'Group (A)',
      badgeName: 'Group (A) • Prep 1 • Week 2 Assessment',
      questions: [
        {
          id: 'W2_A1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Find the value of b',
          prompt: '1) If \\(\\frac{15}{b} = \\frac{10}{60}\\), what is the value of \\(b\\) ?',
          options: [
            { key: 'a', text: '90', isCorrect: true },
            { key: 'b', text: '30', isCorrect: false },
            { key: 'c', text: '60', isCorrect: false },
            { key: 'd', text: '120', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Write down the proportion:</strong></div>
            <div class="sol-math">\\[\\frac{15}{b} = \\frac{10}{60}\\]</div>
            <div class="sol-step"><strong>Step 2: Cross multiplication:</strong></div>
            <div class="sol-math">\\[10 \\times b = 15 \\times 60\\]</div>
            <div class="sol-math">\\[10b = 900\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(b\\):</strong></div>
            <div class="sol-math">\\[b = \\frac{900}{10} = 90\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(a) 90</strong></div>
          `
        },
        {
          id: 'W2_A2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Drawing Scale',
          prompt: '2) If the drawing length is \\(3\\text{ cm}\\) and the real length is \\(18\\text{ meters}\\), then the drawing scale is...............',
          options: [
            { key: 'a', text: '1:60', isCorrect: false },
            { key: 'b', text: '1:600', isCorrect: true },
            { key: 'c', text: '1:6', isCorrect: false },
            { key: 'd', text: '1:6,000', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Convert units to the same unit (centimeters):</strong></div>
            <div class="sol-math">\\[\\text{Real length} = 18\\text{ m} = 18 \\times 100\\text{ cm} = 1,800\\text{ cm}\\]</div>
            <div class="sol-step"><strong>Step 2: Apply the drawing scale ratio:</strong></div>
            <div class="sol-math">\\[\\text{Drawing Scale} = \\frac{\\text{Drawing Length}}{\\text{Real Length}} = \\frac{3\\text{ cm}}{1,800\\text{ cm}}\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify by dividing both terms by 3:</strong></div>
            <div class="sol-math">\\[\\frac{3 \\div 3}{1,800 \\div 3} = \\frac{1}{600} = 1:600\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) 1:600</strong></div>
          `
        },
        {
          id: 'W2_A3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Proportion Word Problem (Pens)',
          prompt: '1) Jalal bought 10 pens for \\(70\\text{ L.E}\\). How many pens of the same type can he buy with \\(119\\text{ L.E}\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Method 1: Unit Rate (Price of 1 pen)</strong></div>
            <div class="sol-math">\\[\\text{Price of 1 pen} = \\frac{70}{10} = 7\\text{ L.E}\\]</div>
            <div class="sol-step"><strong>Number of pens that can be bought with 119 L.E:</strong></div>
            <div class="sol-math">\\[\\text{Number of pens} = \\frac{119}{7} = 17\\text{ pens}\\]</div>
            <div class="sol-divider">OR</div>
            <div class="sol-step"><strong>Method 2: Direct Proportion</strong></div>
            <div class="sol-math">\\[\\frac{\\text{Pens}}{\\text{Price}} \\Rightarrow \\frac{10}{70} = \\frac{x}{119}\\]</div>
            <div class="sol-math">\\[x = \\frac{10 \\times 119}{70} = \\frac{1,190}{70} = 17\\text{ pens}\\]</div>
            <div class="sol-highlight">He can buy <strong>17 pens</strong>.</div>
          `
        },
        {
          id: 'W2_A4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Percentage & Profit Problem (Meal)',
          prompt: '2) A meal costs \\(180\\text{ L.E}\\) and a \\(15\\%\\) profit is added to the cost of the meal. What is the selling price of the meal?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Calculate the amount of profit:</strong></div>
            <div class="sol-math">\\[\\text{Profit} = 180 \\times 15\\% = 180 \\times \\frac{15}{100} = 27\\text{ L.E}\\]</div>
            <div class="sol-step"><strong>Step 2: Calculate the selling price:</strong></div>
            <div class="sol-math">\\[\\text{Selling Price} = \\text{Cost} + \\text{Profit} = 180 + 27 = 207\\text{ L.E}\\]</div>
            <div class="sol-step"><em>Alternative single-step method:</em> \\[180 \\times 115\\% = 180 \\times 1.15 = 207\\text{ L.E}\\]</div>
            <div class="sol-highlight">The selling price of the meal is <strong>207 L.E</strong>.</div>
          `
        },
        {
          id: 'W2_A5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Ratio Distribution (3600 L.E)',
          prompt: '3) A man wanted to distribute \\(3,600\\text{ L.E}\\) between two people in a ratio of \\(3:2\\). What would be the share of each person?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Find the sum of parts in the ratio:</strong></div>
            <div class="sol-math">\\[\\text{Sum of parts} = 3 + 2 = 5\\text{ parts}\\]</div>
            <div class="sol-step"><strong>Step 2: Find the value of one part:</strong></div>
            <div class="sol-math">\\[\\text{Value of 1 part} = \\frac{3,600}{5} = 720\\text{ L.E}\\]</div>
            <div class="sol-step"><strong>Step 3: Calculate the share of each person:</strong></div>
            <div class="sol-math">\\[\\text{First person's share} = 3 \\times 720 = 2,160\\text{ L.E}\\]</div>
            <div class="sol-math">\\[\\text{Second person's share} = 2 \\times 720 = 1,440\\text{ L.E}\\]</div>
            <div class="sol-step"><em>Verification:</em> \\(2,160 + 1,440 = 3,600\\text{ L.E}\\) \\(\\checkmark\\)</div>
            <div class="sol-highlight">1st Person = <strong>2,160 L.E</strong> &nbsp;|&nbsp; 2nd Person = <strong>1,440 L.E</strong></div>
          `
        }
      ]
    },
    groupB: {
      id: 'groupB',
      title: 'Group (B)',
      badgeName: 'Group (B) • Prep 1 • Week 2 Assessment',
      questions: [
        {
          id: 'W2_B1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Find the value of y',
          prompt: '1) If \\(\\frac{15}{y} = \\frac{3}{4}\\), find the value of \\(y\\) .',
          options: [
            { key: 'a', text: '100', isCorrect: false },
            { key: 'b', text: '20', isCorrect: true },
            { key: 'c', text: '60', isCorrect: false },
            { key: 'd', text: '75', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Write down the proportion:</strong></div>
            <div class="sol-math">\\[\\frac{15}{y} = \\frac{3}{4}\\]</div>
            <div class="sol-step"><strong>Step 2: Cross multiplication:</strong></div>
            <div class="sol-math">\\[3 \\times y = 15 \\times 4\\]</div>
            <div class="sol-math">\\[3y = 60\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(y\\):</strong></div>
            <div class="sol-math">\\[y = \\frac{60}{3} = 20\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) 20</strong></div>
          `
        },
        {
          id: 'W2_B2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Drawing Scale',
          prompt: '2) If the length in a drawing is \\(2\\text{ cm}\\) and the real length is \\(6\\text{ meters}\\), then the drawing scale is......',
          options: [
            { key: 'a', text: '1:3', isCorrect: false },
            { key: 'b', text: '1:300', isCorrect: true },
            { key: 'c', text: '1:3,000', isCorrect: false },
            { key: 'd', text: '1:30', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Convert meters to centimeters:</strong></div>
            <div class="sol-math">\\[\\text{Real length} = 6\\text{ m} = 6 \\times 100\\text{ cm} = 600\\text{ cm}\\]</div>
            <div class="sol-step"><strong>Step 2: Calculate the drawing scale:</strong></div>
            <div class="sol-math">\\[\\text{Drawing Scale} = \\frac{\\text{Drawing Length}}{\\text{Real Length}} = \\frac{2\\text{ cm}}{600\\text{ cm}}\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify by dividing both by 2:</strong></div>
            <div class="sol-math">\\[\\frac{2 \\div 2}{600 \\div 2} = \\frac{1}{300} = 1:300\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) 1:300</strong></div>
          `
        },
        {
          id: 'W2_B3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Ratio Distribution (1080 EGP)',
          prompt: '1) If an amount of \\(1,080\\text{ EGP}\\) is divided between two people in a ratio of \\(7:5\\), what is the share of each person?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Find the total number of parts:</strong></div>
            <div class="sol-math">\\[\\text{Total parts} = 7 + 5 = 12\\text{ parts}\\]</div>
            <div class="sol-step"><strong>Step 2: Find the value of 1 part:</strong></div>
            <div class="sol-math">\\[\\text{Value of 1 part} = \\frac{1,080}{12} = 90\\text{ EGP}\\]</div>
            <div class="sol-step"><strong>Step 3: Calculate each person's share:</strong></div>
            <div class="sol-math">\\[\\text{1st person's share} = 7 \\times 90 = 630\\text{ EGP}\\]</div>
            <div class="sol-math">\\[\\text{2nd person's share} = 5 \\times 90 = 450\\text{ EGP}\\]</div>
            <div class="sol-step"><em>Check:</em> \\(630 + 450 = 1,080\\text{ EGP}\\) \\(\\checkmark\\)</div>
            <div class="sol-highlight">1st Share = <strong>630 EGP</strong> &nbsp;|&nbsp; 2nd Share = <strong>450 EGP</strong></div>
          `
        },
        {
          id: 'W2_B4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Weight Proportion (Earth & Moon)',
          prompt: '2) An object weighs \\(120\\text{ Newtons}\\) on Earth. If you know that its weight on the moon is \\(20\\text{ Newtons}\\), what would be the weight of another object on the moon if its weight on Earth is \\(90\\text{ Newtons}\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Method 1: Direct Proportion</strong></div>
            <div class="sol-math">\\[\\frac{\\text{Moon Weight}}{\\text{Earth Weight}} \\Rightarrow \\frac{20}{120} = \\frac{W_{\\text{moon}}}{90}\\]</div>
            <div class="sol-step"><strong>Cross Multiplication:</strong></div>
            <div class="sol-math">\\[W_{\\text{moon}} = \\frac{20 \\times 90}{120} = \\frac{1,800}{120} = 15\\text{ Newtons}\\]</div>
            <div class="sol-divider">OR</div>
            <div class="sol-step"><strong>Method 2: Ratio of Lunar Gravity</strong></div>
            <div class="sol-math">\\[\\text{Gravity Ratio} = \\frac{20}{120} = \\frac{1}{6}\\]</div>
            <div class="sol-math">\\[\\text{Weight on Moon} = 90 \\times \\frac{1}{6} = 15\\text{ Newtons}\\]</div>
            <div class="sol-highlight">Weight on the moon = <strong>15 Newtons</strong>.</div>
          `
        },
        {
          id: 'W2_B5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Selling Price with Profit (Goods)',
          prompt: '3) A man bought goods for \\(3,000\\text{ EGP}\\) and sold them for a profit of \\(10\\%\\). What is the selling price after adding the profit?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Calculate the profit value:</strong></div>
            <div class="sol-math">\\[\\text{Profit} = 3,000 \\times 10\\% = 3,000 \\times \\frac{10}{100} = 300\\text{ EGP}\\]</div>
            <div class="sol-step"><strong>Step 2: Calculate the selling price:</strong></div>
            <div class="sol-math">\\[\\text{Selling Price} = \\text{Cost} + \\text{Profit} = 3,000 + 300 = 3,300\\text{ EGP}\\]</div>
            <div class="sol-step"><em>Direct 110% method:</em> \\[3,000 \\times 1.10 = 3,300\\text{ EGP}\\]</div>
            <div class="sol-highlight">The selling price is <strong>3,300 EGP</strong>.</div>
          `
        }
      ]
    },
    groupC: {
      id: 'groupC',
      title: 'Group (C)',
      badgeName: 'Group (C) • Prep 1 • Week 2 Assessment',
      questions: [
        {
          id: 'W2_C1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Find the value of a',
          prompt: '1) Find the value of \\(a\\) if \\(\\frac{6}{a} = \\frac{3}{5}\\).',
          options: [
            { key: 'a', text: '9', isCorrect: false },
            { key: 'b', text: '30', isCorrect: false },
            { key: 'c', text: '12', isCorrect: false },
            { key: 'd', text: '10', isCorrect: true }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Write down the proportion:</strong></div>
            <div class="sol-math">\\[\\frac{6}{a} = \\frac{3}{5}\\]</div>
            <div class="sol-step"><strong>Step 2: Cross multiplication:</strong></div>
            <div class="sol-math">\\[3 \\times a = 6 \\times 5\\]</div>
            <div class="sol-math">\\[3a = 30\\]</div>
            <div class="sol-step"><strong>Step 3: Solve for \\(a\\):</strong></div>
            <div class="sol-math">\\[a = \\frac{30}{3} = 10\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(d) 10</strong></div>
          `
        },
        {
          id: 'W2_C2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Real Length from Scale',
          prompt: '2) If the drawing scale is \\(1:1,000\\) and the length in the drawing is \\(2.5\\text{ cm}\\), what is the real length?',
          options: [
            { key: 'a', text: '0.25 m', isCorrect: false },
            { key: 'b', text: '25 m', isCorrect: true },
            { key: 'c', text: '2.5 m', isCorrect: false },
            { key: 'd', text: '250 m', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Use drawing scale ratio:</strong></div>
            <div class="sol-math">\\[\\frac{\\text{Drawing Length}}{\\text{Real Length}} = \\frac{1}{1,000}\\]</div>
            <div class="sol-step"><strong>Step 2: Calculate real length in centimeters:</strong></div>
            <div class="sol-math">\\[\\text{Real Length} = 2.5 \\times 1,000 = 2,500\\text{ cm}\\]</div>
            <div class="sol-step"><strong>Step 3: Convert centimeters to meters:</strong></div>
            <div class="sol-math">\\[\\text{Real Length in meters} = \\frac{2,500}{100} = 25\\text{ meters}\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) 25 m</strong></div>
          `
        },
        {
          id: 'W2_C3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Land Area Division (36 acres)',
          prompt: '1) A piece of land with an area of \\(36\\text{ acres}\\) was divided between two people in a ratio of \\(7:2\\). What is the share of each person?',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Find the sum of the ratio parts:</strong></div>
            <div class="sol-math">\\[\\text{Sum of parts} = 7 + 2 = 9\\text{ parts}\\]</div>
            <div class="sol-step"><strong>Step 2: Find the value of 1 part:</strong></div>
            <div class="sol-math">\\[\\text{Value of 1 part} = \\frac{36}{9} = 4\\text{ acres}\\]</div>
            <div class="sol-step"><strong>Step 3: Calculate each person's share:</strong></div>
            <div class="sol-math">\\[\\text{First person's share} = 7 \\times 4 = 28\\text{ acres}\\]</div>
            <div class="sol-math">\\[\\text{Second person's share} = 2 \\times 4 = 8\\text{ acres}\\]</div>
            <div class="sol-step"><em>Check:</em> \\(28 + 8 = 36\\text{ acres}\\) \\(\\checkmark\\)</div>
            <div class="sol-highlight">1st Share = <strong>28 acres</strong> &nbsp;|&nbsp; 2nd Share = <strong>8 acres</strong></div>
          `
        },
        {
          id: 'W2_C4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Factory Workers & Cloth Proportion',
          prompt: '2) In a factory, 10 workers produce \\(300\\text{ pieces}\\) of cloth. How many workers are needed to produce \\(630\\text{ pieces}\\)?',
          modelSolution: `
            <div class="sol-step"><strong>Method 1: Direct Proportion</strong></div>
            <div class="sol-math">\\[\\frac{\\text{Workers}}{\\text{Pieces}} \\Rightarrow \\frac{10}{300} = \\frac{W}{630}\\]</div>
            <div class="sol-step"><strong>Cross Multiply:</strong></div>
            <div class="sol-math">\\[W = \\frac{10 \\times 630}{300} = \\frac{6,300}{300} = 21\\text{ workers}\\]</div>
            <div class="sol-divider">OR</div>
            <div class="sol-step"><strong>Method 2: Rate of 1 Worker</strong></div>
            <div class="sol-math">\\[\\text{1 worker produces} = \\frac{300}{10} = 30\\text{ pieces}\\]</div>
            <div class="sol-math">\\[\\text{Workers needed} = \\frac{630}{30} = 21\\text{ workers}\\]</div>
            <div class="sol-highlight">Number of workers needed = <strong>21 workers</strong>.</div>
          `
        },
        {
          id: 'W2_C5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Car Profit (300,000 EGP)',
          prompt: '3) Khaled bought a car for \\(300,000\\text{ EGP}\\) and then sold it for a \\(5\\%\\) profit on the purchase price. Calculate the selling price of the car.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Calculate the profit on the car:</strong></div>
            <div class="sol-math">\\[\\text{Profit} = 300,000 \\times 5\\% = 300,000 \\times \\frac{5}{100} = 15,000\\text{ EGP}\\]</div>
            <div class="sol-step"><strong>Step 2: Calculate the selling price:</strong></div>
            <div class="sol-math">\\[\\text{Selling Price} = \\text{Cost} + \\text{Profit} = 300,000 + 15,000 = 315,000\\text{ EGP}\\]</div>
            <div class="sol-step"><em>Direct calculation:</em> \\[300,000 \\times 1.05 = 315,000\\text{ EGP}\\]</div>
            <div class="sol-highlight">The selling price of the car is <strong>315,000 EGP</strong>.</div>
          `
        }
      ]
    }
  },

  // ========================================================================
  // WEEK 3: SETS, OPERATIONS & VENN DIAGRAMS
  // ========================================================================
  week3: {
    id: 'week3',
    title: 'Week 3: Sets & Operations',
    stageName: 'Weekly Assessment – Week 3 (Sets & Venn Diagrams)',
    groupA: {
      id: 'groupA',
      title: 'Group (A)',
      badgeName: 'Group (A) • Week 3 Assessment',
      questions: [
        {
          id: 'W3_A1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Belonging to a Set',
          prompt: '1) If \\(x \\in \\{8, 2, 5\\}\\) then the value of \\(x\\) cannot be equal to:',
          options: [
            { key: 'a', text: '3', isCorrect: true },
            { key: 'b', text: '5', isCorrect: false },
            { key: 'c', text: '8', isCorrect: false },
            { key: 'd', text: '2', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Concept: Belonging to a Set (\\(\\in\\))</strong></div>
            <div class="sol-step">If \\(x \\in \\{8, 2, 5\\}\\), this means that \\(x\\) must be one of the elements belonging to the set:</div>
            <div class="sol-math">\\[x = 8 \\quad \\text{or} \\quad x = 2 \\quad \\text{or} \\quad x = 5\\]</div>
            <div class="sol-step">Checking the given options:</div>
            <div class="sol-step">• <strong>5</strong> is in the set \\(\\checkmark\\)</div>
            <div class="sol-step">• <strong>8</strong> is in the set \\(\\checkmark\\)</div>
            <div class="sol-step">• <strong>2</strong> is in the set \\(\\checkmark\\)</div>
            <div class="sol-step">• <strong>3</strong> is <em>NOT</em> in the set (\\(3 \\notin \\{8, 2, 5\\}\\))</div>
            <div class="sol-highlight">Therefore, \\(x\\) cannot be equal to <strong>(a) 3</strong></div>
          `
        },
        {
          id: 'W3_A2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Equal Sets',
          prompt: '2) If \\(\\{1, 3, x\\} = \\{7, 1, y\\}\\) what is the value of \\(x - y\\) ?',
          options: [
            { key: 'a', text: '4', isCorrect: true },
            { key: 'b', text: '7', isCorrect: false },
            { key: 'c', text: '3', isCorrect: false },
            { key: 'd', text: '10', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Understand Equal Sets</strong></div>
            <div class="sol-step">Two sets are equal if and only if they contain the exact same elements:</div>
            <div class="sol-math">\\[\\{1, 3, x\\} = \\{7, 1, y\\}\\]</div>
            <div class="sol-step"><strong>Step 2: Match corresponding elements:</strong></div>
            <div class="sol-step">The element \\(1\\) is common to both sets. Therefore:</div>
            <div class="sol-math">\\[\\{3, x\\} = \\{7, y\\}\\]</div>
            <div class="sol-step">Since \\(3 \\ne 7\\), it must be that \\(y = 3\\) and \\(x = 7\\).</div>
            <div class="sol-step"><strong>Step 3: Calculate \\(x - y\\):</strong></div>
            <div class="sol-math">\\[x - y = 7 - 3 = 4\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(a) 4</strong></div>
          `
        },
        {
          id: 'W3_A3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Venn Diagram Operations',
          prompt: `
            1) Use the opposite Venn diagram to find:
            <div style="margin: 0.6rem 0; font-size: 1.15rem; font-weight: 700;">
              (1) \\(A \\cap B\\) &emsp;&emsp; (2) \\(A \\cup B\\)
            </div>
            <div class="venn-diagram-container" style="display:flex; justify-content:center; margin:1rem 0;">
              <svg width="340" height="200" viewBox="0 0 340 200" style="background:#f8faff; border-radius:16px; border:1.5px solid #dce4f2; box-shadow:0 4px 14px rgba(0,0,0,0.05); max-width:100%;">
                <ellipse cx="130" cy="105" rx="85" ry="75" fill="rgba(108, 92, 231, 0.12)" stroke="#6c5ce7" stroke-width="2.5" />
                <ellipse cx="210" cy="105" rx="85" ry="75" fill="rgba(0, 184, 148, 0.12)" stroke="#00b894" stroke-width="2.5" />
                <text x="70" y="38" font-family="'Cairo', sans-serif" font-size="20" font-weight="800" fill="#6c5ce7">B</text>
                <text x="265" y="38" font-family="'Cairo', sans-serif" font-size="20" font-weight="800" fill="#00b894">A</text>
                <circle cx="100" cy="70" r="3" fill="#2d3436"/><text x="108" y="75" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#2d3436">9</text>
                <circle cx="85" cy="115" r="3" fill="#2d3436"/><text x="93" y="120" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#2d3436">7</text>
                <circle cx="110" cy="150" r="3" fill="#2d3436"/><text x="118" y="155" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#2d3436">5</text>
                <circle cx="166" cy="105" r="3.5" fill="#d63031"/><text x="174" y="110" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="800" fill="#d63031">1</text>
                <circle cx="245" cy="90" r="3" fill="#2d3436"/><text x="253" y="95" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#2d3436">2</text>
                <circle cx="230" cy="140" r="3" fill="#2d3436"/><text x="238" y="145" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#2d3436">4</text>
              </svg>
            </div>
          `,
          modelSolution: `
            <div class="sol-step"><strong>Reading elements from the Venn diagram:</strong></div>
            <div class="sol-step">• Elements of set \\(B = \\{1, 5, 7, 9\\}\\)</div>
            <div class="sol-step">• Elements of set \\(A = \\{1, 2, 4\\}\\)</div>
            <div class="sol-step"><strong>(1) Intersection \\(A \\cap B\\):</strong> (common elements in the overlap)</div>
            <div class="sol-math">\\[A \\cap B = \\{1\\}\\]</div>
            <div class="sol-step"><strong>(2) Union \\(A \\cup B\\):</strong> (all elements in \\(A\\) and \\(B\\) without repetition)</div>
            <div class="sol-math">\\[A \\cup B = \\{1, 2, 4, 5, 7, 9\\}\\]</div>
            <div class="sol-highlight">(1) \\(A \\cap B = \\mathbf{\\{1\\}}\\) &nbsp;|&nbsp; (2) \\(A \\cup B = \\mathbf{\\{1, 2, 4, 5, 7, 9\\}}\\)</div>
          `
        },
        {
          id: 'W3_A4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Subsets of a Set',
          prompt: '2) Write all the subsets from the set \\(\\{3, 9\\}\\)',
          modelSolution: `
            <div class="sol-step"><strong>Rule: Subsets of a Finite Set</strong></div>
            <div class="sol-step">For a set with \\(n\\) elements, the total number of subsets is \\(2^n\\).</div>
            <div class="sol-step">Here, \\(n = 2\\), so the number of subsets is \\(2^2 = 4\\).</div>
            <div class="sol-step"><strong>Listing all subsets:</strong></div>
            <div class="sol-step">1. The empty set: \\(\\phi\\) (or \\(\\{\\}\\))</div>
            <div class="sol-step">2. Subsets containing 1 element: \\(\\{3\\}\\), \\(\\{9\\}\\)</div>
            <div class="sol-step">3. The set itself (containing 2 elements): \\(\\{3, 9\\}\\)</div>
            <div class="sol-highlight">All subsets are: <strong>\\(\\phi\\) , \\(\\{3\\}\\) , \\(\\{9\\}\\) , \\(\\{3, 9\\}\\)</strong></div>
          `
        },
        {
          id: 'W3_A5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Operations on Three Sets',
          prompt: `
            3) If \\(A = \\{1, 7, 9\\}\\), \\(B = \\{4, 2, 7\\}\\) and \\(C = \\{1, 7\\}\\). Find:
            <div style="margin-top: 0.6rem; font-size: 1.15rem; font-weight: 700;">
              (1) \\(A \\cap B \\cap C\\) &emsp;&emsp; (2) \\(A \\cup B \\cup C\\)
            </div>
          `,
          modelSolution: `
            <div class="sol-step"><strong>Given Sets:</strong></div>
            <div class="sol-math">\\[A = \\{1, 7, 9\\}, \\quad B = \\{2, 4, 7\\}, \\quad C = \\{1, 7\\}\\]</div>
            <div class="sol-step"><strong>(1) Intersection \\(A \\cap B \\cap C\\):</strong></div>
            <div class="sol-step">Find the element(s) that belong to all three sets simultaneously:</div>
            <div class="sol-step">• \\(7 \\in A\\), \\(7 \\in B\\), and \\(7 \\in C\\) \\(\\implies 7\\) is common to all three.</div>
            <div class="sol-step">• \\(1\\) is in \\(A\\) and \\(C\\), but \\(1 \\notin B\\).</div>
            <div class="sol-math">\\[A \\cap B \\cap C = \\{7\\}\\]</div>
            <div class="sol-step"><strong>(2) Union \\(A \\cup B \\cup C\\):</strong></div>
            <div class="sol-step">Collect all elements from \\(A\\), \\(B\\), and \\(C\\) without repeating:</div>
            <div class="sol-math">\\[A \\cup B \\cup C = \\{1, 2, 4, 7, 9\\}\\]</div>
            <div class="sol-highlight">(1) \\(A \\cap B \\cap C = \\mathbf{\\{7\\}}\\) &nbsp;|&nbsp; (2) \\(A \\cup B \\cup C = \\mathbf{\\{1, 2, 4, 7, 9\\}}\\)</div>
          `
        }
      ]
    },
    groupB: {
      id: 'groupB',
      title: 'Group (B)',
      badgeName: 'Group (B) • Week 3 Assessment',
      questions: [
        {
          id: 'W3_B1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Not Belonging to a Set',
          prompt: '1) If \\(x \\notin \\{1, 3, 4\\}\\) then the value of \\(x\\) can be equal to:',
          options: [
            { key: 'a', text: '3', isCorrect: false },
            { key: 'b', text: '5', isCorrect: true },
            { key: 'c', text: '4', isCorrect: false },
            { key: 'd', text: '1', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Concept: Not Belonging (\\(\\notin\\))</strong></div>
            <div class="sol-step">\\(x \\notin \\{1, 3, 4\\}\\) means \\(x\\) is <em>NOT</em> an element of the set \\(\\{1, 3, 4\\}\\).</div>
            <div class="sol-step">Checking the options:</div>
            <div class="sol-step">• <strong>3</strong> belongs to the set (\\(3 \\in \\{1, 3, 4\\}\\))</div>
            <div class="sol-step">• <strong>4</strong> belongs to the set (\\(4 \\in \\{1, 3, 4\\}\\))</div>
            <div class="sol-step">• <strong>1</strong> belongs to the set (\\(1 \\in \\{1, 3, 4\\}\\))</div>
            <div class="sol-step">• <strong>5</strong> does NOT belong to the set (\\(5 \\notin \\{1, 3, 4\\}\\))</div>
            <div class="sol-highlight">Therefore, \\(x\\) can be equal to <strong>(b) 5</strong></div>
          `
        },
        {
          id: 'W3_B2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Equal Sets with Four Elements',
          prompt: '2) If \\(\\{6, 3, x, 7\\} = \\{3, 5, y, 6\\}\\) what is the value of \\(y - x\\) ?',
          options: [
            { key: 'a', text: '5', isCorrect: false },
            { key: 'b', text: '2', isCorrect: true },
            { key: 'c', text: '7', isCorrect: false },
            { key: 'd', text: '12', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Compare the elements of both sets:</strong></div>
            <div class="sol-math">\\[\\{6, 3, x, 7\\} = \\{3, 5, y, 6\\}\\]</div>
            <div class="sol-step">Elements \\(3\\) and \\(6\\) are present in both sets.</div>
            <div class="sol-step"><strong>Step 2: Equate the remaining elements:</strong></div>
            <div class="sol-math">\\[\\{x, 7\\} = \\{5, y\\}\\]</div>
            <div class="sol-step">Since \\(7 \\ne 5\\), we deduce:</div>
            <div class="sol-math">\\[y = 7 \\quad \\text{and} \\quad x = 5\\]</div>
            <div class="sol-step"><strong>Step 3: Calculate \\(y - x\\):</strong></div>
            <div class="sol-math">\\[y - x = 7 - 5 = 2\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) 2</strong></div>
          `
        },
        {
          id: 'W3_B3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Venn Diagram Operations',
          prompt: `
            1) Use the opposite Venn diagram to find:
            <div style="margin: 0.6rem 0; font-size: 1.15rem; font-weight: 700;">
              (1) \\(A \\cap B\\) &emsp;&emsp; (2) \\(A \\cup B\\)
            </div>
            <div class="venn-diagram-container" style="display:flex; justify-content:center; margin:1rem 0;">
              <svg width="340" height="200" viewBox="0 0 340 200" style="background:#f8faff; border-radius:16px; border:1.5px solid #dce4f2; box-shadow:0 4px 14px rgba(0,0,0,0.05); max-width:100%;">
                <ellipse cx="130" cy="105" rx="85" ry="75" fill="rgba(108, 92, 231, 0.12)" stroke="#6c5ce7" stroke-width="2.5" />
                <ellipse cx="210" cy="105" rx="85" ry="75" fill="rgba(0, 184, 148, 0.12)" stroke="#00b894" stroke-width="2.5" />
                <text x="70" y="38" font-family="'Cairo', sans-serif" font-size="20" font-weight="800" fill="#6c5ce7">B</text>
                <text x="265" y="38" font-family="'Cairo', sans-serif" font-size="20" font-weight="800" fill="#00b894">A</text>
                <circle cx="95" cy="85" r="3" fill="#2d3436"/><text x="103" y="90" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#2d3436">10</text>
                <circle cx="90" cy="135" r="3" fill="#2d3436"/><text x="98" y="140" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#2d3436">12</text>
                <circle cx="165" cy="105" r="3.5" fill="#d63031"/><text x="173" y="110" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="800" fill="#d63031">15</text>
                <circle cx="240" cy="85" r="3" fill="#2d3436"/><text x="248" y="90" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#2d3436">7</text>
                <circle cx="235" cy="135" r="3" fill="#2d3436"/><text x="243" y="140" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#2d3436">11</text>
              </svg>
            </div>
          `,
          modelSolution: `
            <div class="sol-step"><strong>Reading elements from the Venn diagram:</strong></div>
            <div class="sol-step">• Elements of set \\(B = \\{10, 12, 15\\}\\)</div>
            <div class="sol-step">• Elements of set \\(A = \\{7, 11, 15\\}\\)</div>
            <div class="sol-step"><strong>(1) Intersection \\(A \\cap B\\):</strong></div>
            <div class="sol-math">\\[A \\cap B = \\{15\\}\\]</div>
            <div class="sol-step"><strong>(2) Union \\(A \\cup B\\):</strong></div>
            <div class="sol-math">\\[A \\cup B = \\{7, 10, 11, 12, 15\\}\\]</div>
            <div class="sol-highlight">(1) \\(A \\cap B = \\mathbf{\\{15\\}}\\) &nbsp;|&nbsp; (2) \\(A \\cup B = \\mathbf{\\{7, 10, 11, 12, 15\\}}\\)</div>
          `
        },
        {
          id: 'W3_B4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Subsets of a Set',
          prompt: '2) Write all the subsets from the set \\(\\{1, 8\\}\\)',
          modelSolution: `
            <div class="sol-step"><strong>Rule: Number of Subsets</strong></div>
            <div class="sol-step">The set has \\(2\\) elements, so total subsets = \\(2^2 = 4\\).</div>
            <div class="sol-step"><strong>Listing all subsets:</strong></div>
            <div class="sol-step">1. Empty set: \\(\\phi\\)</div>
            <div class="sol-step">2. Single-element subsets: \\(\\{1\\}\\), \\(\\{8\\}\\)</div>
            <div class="sol-step">3. Two-element subset (the set itself): \\(\\{1, 8\\}\\)</div>
            <div class="sol-highlight">All subsets are: <strong>\\(\\phi\\) , \\(\\{1\\}\\) , \\(\\{8\\}\\) , \\(\\{1, 8\\}\\)</strong></div>
          `
        },
        {
          id: 'W3_B5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Operations on Three Sets',
          prompt: `
            3) If \\(A = \\{1, 5, 8\\}\\), \\(B = \\{4, 5, 7\\}\\) and \\(C = \\{1, 5\\}\\). Find:
            <div style="margin-top: 0.6rem; font-size: 1.15rem; font-weight: 700;">
              (1) \\(A \\cap B \\cap C\\) &emsp;&emsp; (2) \\(A \\cup B \\cup C\\)
            </div>
          `,
          modelSolution: `
            <div class="sol-step"><strong>Given Sets:</strong></div>
            <div class="sol-math">\\[A = \\{1, 5, 8\\}, \\quad B = \\{4, 5, 7\\}, \\quad C = \\{1, 5\\}\\]</div>
            <div class="sol-step"><strong>(1) Intersection \\(A \\cap B \\cap C\\):</strong></div>
            <div class="sol-step">Common to all three sets:</div>
            <div class="sol-step">• \\(5 \\in A\\), \\(5 \\in B\\), and \\(5 \\in C\\) \\(\\implies 5\\) is common.</div>
            <div class="sol-step">• \\(1 \\in A\\) and \\(1 \\in C\\), but \\(1 \\notin B\\).</div>
            <div class="sol-math">\\[A \\cap B \\cap C = \\{5\\}\\]</div>
            <div class="sol-step"><strong>(2) Union \\(A \\cup B \\cup C\\):</strong></div>
            <div class="sol-math">\\[A \\cup B \\cup C = \\{1, 4, 5, 7, 8\\}\\]</div>
            <div class="sol-highlight">(1) \\(A \\cap B \\cap C = \\mathbf{\\{5\\}}\\) &nbsp;|&nbsp; (2) \\(A \\cup B \\cup C = \\mathbf{\\{1, 4, 5, 7, 8\\}}\\)</div>
          `
        }
      ]
    },
    groupC: {
      id: 'groupC',
      title: 'Group (C)',
      badgeName: 'Group (C) • Week 3 Assessment',
      questions: [
        {
          id: 'W3_C1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Belonging with Algebraic Expression',
          prompt: '1) If \\(7 \\in \\{x + 2, 3, 4\\}\\) then \\(x = \\dots\\dots\\dots\\dots\\)',
          options: [
            { key: 'a', text: '4', isCorrect: false },
            { key: 'b', text: '5', isCorrect: true },
            { key: 'c', text: '7', isCorrect: false },
            { key: 'd', text: '2', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set membership condition:</strong></div>
            <div class="sol-step">Since \\(7 \\in \\{x + 2, 3, 4\\}\\), \\(7\\) must equal one of the elements.</div>
            <div class="sol-step">Since \\(7 \\ne 3\\) and \\(7 \\ne 4\\), we have:</div>
            <div class="sol-math">\\[x + 2 = 7\\]</div>
            <div class="sol-step"><strong>Step 2: Solve for \\(x\\):</strong></div>
            <div class="sol-math">\\[x = 7 - 2 = 5\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) 5</strong></div>
          `
        },
        {
          id: 'W3_C2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Equal Sets (Sum of Unknowns)',
          prompt: '2) If \\(\\{6, 3, a, 7\\} = \\{3, 5, b, 6\\}\\). What is the value of \\(a + b\\) ?',
          options: [
            { key: 'a', text: '2', isCorrect: false },
            { key: 'b', text: '10', isCorrect: false },
            { key: 'c', text: '8', isCorrect: false },
            { key: 'd', text: '12', isCorrect: true }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Match common elements:</strong></div>
            <div class="sol-math">\\[\\{6, 3, a, 7\\} = \\{3, 5, b, 6\\}\\]</div>
            <div class="sol-step">Elements \\(3\\) and \\(6\\) cancel out from both sets:</div>
            <div class="sol-math">\\[\\{a, 7\\} = \\{5, b\\}\\]</div>
            <div class="sol-step">Since \\(7 \\ne 5\\), we must have \\(b = 7\\) and \\(a = 5\\).</div>
            <div class="sol-step"><strong>Step 2: Calculate \\(a + b\\):</strong></div>
            <div class="sol-math">\\[a + b = 5 + 7 = 12\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(d) 12</strong></div>
          `
        },
        {
          id: 'W3_C3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Set Intersection and Union',
          prompt: `
            1) If \\(A = \\{8, 6, 7\\}\\) and \\(B = \\{1, 8, 3, 2\\}\\). Find:
            <div style="margin-top: 0.6rem; font-size: 1.15rem; font-weight: 700;">
              (1) \\(A \\cap B\\) &emsp;&emsp; (2) \\(A \\cup B\\)
            </div>
          `,
          modelSolution: `
            <div class="sol-step"><strong>(1) Intersection \\(A \\cap B\\):</strong></div>
            <div class="sol-step">Elements that belong to both \\(A\\) and \\(B\\):</div>
            <div class="sol-step">• Only the element \\(8\\) is in both sets.</div>
            <div class="sol-math">\\[A \\cap B = \\{8\\}\\]</div>
            <div class="sol-step"><strong>(2) Union \\(A \\cup B\\):</strong></div>
            <div class="sol-step">All elements from \\(A\\) and \\(B\\) written in order without repetition:</div>
            <div class="sol-math">\\[A \\cup B = \\{1, 2, 3, 6, 7, 8\\}\\]</div>
            <div class="sol-highlight">(1) \\(A \\cap B = \\mathbf{\\{8\\}}\\) &nbsp;|&nbsp; (2) \\(A \\cup B = \\mathbf{\\{1, 2, 3, 6, 7, 8\\}}\\)</div>
          `
        },
        {
          id: 'W3_C4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Subsets of a Set',
          prompt: '2) Write all the subsets from the set \\(\\{3, 6\\}\\)',
          modelSolution: `
            <div class="sol-step"><strong>Rule: Subsets Calculation</strong></div>
            <div class="sol-step">Total number of subsets = \\(2^2 = 4\\).</div>
            <div class="sol-step"><strong>The subsets are:</strong></div>
            <div class="sol-step">1. The empty set: \\(\\phi\\)</div>
            <div class="sol-step">2. Subsets of 1 element: \\(\\{3\\}\\), \\(\\{6\\}\\)</div>
            <div class="sol-step">3. Subset of 2 elements: \\(\\{3, 6\\}\\)</div>
            <div class="sol-highlight">All subsets are: <strong>\\(\\phi\\) , \\(\\{3\\}\\) , \\(\\{6\\}\\) , \\(\\{3, 6\\}\\)</strong></div>
          `
        },
        {
          id: 'W3_C5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Operations on Three Sets',
          prompt: `
            3) If \\(A = \\{7, 9, 8\\}\\), \\(B = \\{4, 5, 7\\}\\) and \\(C = \\{1, 7, 8\\}\\). Find:
            <div style="margin-top: 0.6rem; font-size: 1.15rem; font-weight: 700;">
              (1) \\(A \\cap B \\cap C\\) &emsp;&emsp; (2) \\(A \\cup B \\cup C\\)
            </div>
          `,
          modelSolution: `
            <div class="sol-step"><strong>Given Sets:</strong></div>
            <div class="sol-math">\\[A = \\{7, 8, 9\\}, \\quad B = \\{4, 5, 7\\}, \\quad C = \\{1, 7, 8\\}\\]</div>
            <div class="sol-step"><strong>(1) Intersection \\(A \\cap B \\cap C\\):</strong></div>
            <div class="sol-step">• Element \\(7\\) is present in \\(A\\), in \\(B\\), and in \\(C\\).</div>
            <div class="sol-step">• Element \\(8\\) is in \\(A\\) and \\(C\\), but not in \\(B\\).</div>
            <div class="sol-math">\\[A \\cap B \\cap C = \\{7\\}\\]</div>
            <div class="sol-step"><strong>(2) Union \\(A \\cup B \\cup C\\):</strong></div>
            <div class="sol-step">Combining all distinct elements:</div>
            <div class="sol-math">\\[A \\cup B \\cup C = \\{1, 4, 5, 7, 8, 9\\}\\]</div>
            <div class="sol-highlight">(1) \\(A \\cap B \\cap C = \\mathbf{\\{7\\}}\\) &nbsp;|&nbsp; (2) \\(A \\cup B \\cup C = \\mathbf{\\{1, 4, 5, 7, 8, 9\\}}\\)</div>
          `
        }
      ]
    }
  },

  // ========================================================================
  // WEEK 4: OPERATIONS IN INTEGERS (Z) & ABSOLUTE VALUE
  // ========================================================================
  week4: {
    id: 'week4',
    title: 'Week 4: Operations in Integers (Z) & Absolute Value',
    stageName: 'Weekly Assessment – Week 4 (Integers Z)',
    groupA: {
      id: 'groupA',
      title: 'Group (A)',
      badgeName: 'Group (A) • Week 4 Assessment',
      questions: [
        {
          id: 'W4_A1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Subtraction of Integers',
          prompt: '1) \\(-5 - (-3) = \\dots\\dots\\dots\\dots\\)',
          options: [
            { key: 'a', text: '\\(2\\)', isCorrect: false },
            { key: 'b', text: '\\(-8\\)', isCorrect: false },
            { key: 'c', text: '\\(8\\)', isCorrect: false },
            { key: 'd', text: '\\(-2\\)', isCorrect: true }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Rule for subtracting negative numbers:</strong></div>
            <div class="sol-step">Subtracting a negative number is equivalent to adding its opposite:</div>
            <div class="sol-math">\\[-(-3) = +3\\]</div>
            <div class="sol-step"><strong>Step 2: Rewrite the expression:</strong></div>
            <div class="sol-math">\\[-5 - (-3) = -5 + 3\\]</div>
            <div class="sol-step"><strong>Step 3: Add integers with different signs:</strong></div>
            <div class="sol-step">Subtract the absolute values \\((5 - 3 = 2)\\) and take the sign of the number with greater absolute value \\((-5)\\):</div>
            <div class="sol-math">\\[-5 + 3 = -2\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(d) -2</strong></div>
          `
        },
        {
          id: 'W4_A2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Absolute Value & Multiplication',
          prompt: '2) If \\(a = |-2|\\) , \\(b = -5\\) . What is the value of \\(ab\\) ?',
          options: [
            { key: 'a', text: '\\(10\\)', isCorrect: false },
            { key: 'b', text: '\\(7\\)', isCorrect: false },
            { key: 'c', text: '\\(-10\\)', isCorrect: true },
            { key: 'd', text: '\\(-7\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Calculate the absolute value:</strong></div>
            <div class="sol-step">The absolute value of a negative number is positive:</div>
            <div class="sol-math">\\[a = |-2| = 2\\]</div>
            <div class="sol-step"><strong>Step 2: Multiply \\(a \\times b\\):</strong></div>
            <div class="sol-math">\\[ab = 2 \\times (-5) = -10\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(c) -10</strong></div>
          `
        },
        {
          id: 'W4_A3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Properties of Addition in Z',
          prompt: '1) Use the addition properties in \\(\\mathbb{Z}\\) to find the result of: \\((-10) + 2 + 10\\)',
          modelSolution: `
            <div class="sol-step"><strong>Given Expression:</strong></div>
            <div class="sol-math">\\[(-10) + 2 + 10\\]</div>
            <div class="sol-step"><strong>Step 1: Commutative Property:</strong></div>
            <div class="sol-math">\\[= (-10) + 10 + 2 \\quad \\text{(Commutative Property)}\\]</div>
            <div class="sol-step"><strong>Step 2: Associative Property:</strong></div>
            <div class="sol-math">\\[= [(-10) + 10] + 2 \\quad \\text{(Associative Property)}\\]</div>
            <div class="sol-step"><strong>Step 3: Additive Inverse Property:</strong></div>
            <div class="sol-step">The sum of an integer and its additive inverse is 0:</div>
            <div class="sol-math">\\[= 0 + 2 \\quad \\text{(Additive Inverse Property)}\\]</div>
            <div class="sol-step"><strong>Step 4: Additive Identity Property:</strong></div>
            <div class="sol-math">\\[= 2 \\quad \\text{(Additive Identity Property)}\\]</div>
            <div class="sol-highlight">The final result is <strong>2</strong></div>
          `
        },
        {
          id: 'W4_A4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Algebraic Substitution & Order of Operations',
          prompt: '2) If \\(a = 3\\), \\(b = 8\\), \\(c = -7\\). Find in simplest form the value of the expression: \\((2a + b) \\div c\\)',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Substitute the given values:</strong></div>
            <div class="sol-math">\\[(2a + b) \\div c = (2(3) + 8) \\div (-7)\\]</div>
            <div class="sol-step"><strong>Step 2: Perform operations inside parentheses first:</strong></div>
            <div class="sol-math">\\[2 \\times 3 = 6 \\implies 6 + 8 = 14\\]</div>
            <div class="sol-step"><strong>Step 3: Perform division:</strong></div>
            <div class="sol-math">\\[14 \\div (-7) = -2\\]</div>
            <div class="sol-highlight">The simplest form is <strong>-2</strong></div>
          `
        },
        {
          id: 'W4_A5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Operations with Absolute Values & Division',
          prompt: `
            3) If \\(a = 10\\), \\(b = -5\\). Find the result of:
            <div style="margin-top: 0.6rem; font-size: 1.15rem; font-weight: 700;">
              (1) \\(|ab|\\) &emsp;&emsp; (2) \\(|b + a|\\) &emsp;&emsp; (3) \\(15 \\div b\\)
            </div>
          `,
          modelSolution: `
            <div class="sol-step"><strong>(1) Find \\(|ab|\\):</strong></div>
            <div class="sol-math">\\[ab = 10 \\times (-5) = -50\\]</div>
            <div class="sol-math">\\[|ab| = |-50| = 50\\]</div>
            <div class="sol-step"><strong>(2) Find \\(|b + a|\\):</strong></div>
            <div class="sol-math">\\[b + a = -5 + 10 = 5\\]</div>
            <div class="sol-math">\\[|b + a| = |5| = 5\\]</div>
            <div class="sol-step"><strong>(3) Find \\(15 \\div b\\):</strong></div>
            <div class="sol-math">\\[15 \\div (-5) = -3\\]</div>
            <div class="sol-highlight">(1) \\(|ab| = \\mathbf{50}\\) &nbsp;|&nbsp; (2) \\(|b + a| = \\mathbf{5}\\) &nbsp;|&nbsp; (3) \\(15 \\div b = \\mathbf{-3}\\)</div>
          `
        }
      ]
    },
    groupB: {
      id: 'groupB',
      title: 'Group (B)',
      badgeName: 'Group (B) • Week 4 Assessment',
      questions: [
        {
          id: 'W4_B1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Subtraction of Integers',
          prompt: '1) \\(-7 - (-1) = \\dots\\dots\\dots\\dots\\)',
          options: [
            { key: 'a', text: '\\(8\\)', isCorrect: false },
            { key: 'b', text: '\\(-8\\)', isCorrect: false },
            { key: 'c', text: '\\(6\\)', isCorrect: false },
            { key: 'd', text: '\\(-6\\)', isCorrect: true }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Simplify subtracting a negative:</strong></div>
            <div class="sol-math">\\[-7 - (-1) = -7 + 1\\]</div>
            <div class="sol-step"><strong>Step 2: Add integers with different signs:</strong></div>
            <div class="sol-step">Subtract magnitudes \\(7 - 1 = 6\\) with negative sign:</div>
            <div class="sol-math">\\[-7 + 1 = -6\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(d) -6</strong></div>
          `
        },
        {
          id: 'W4_B2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Absolute Value & Multiplication',
          prompt: '2) If \\(a = |-4|\\) , \\(b = -3\\) . What is the value of \\(ab\\) ?',
          options: [
            { key: 'a', text: '\\(12\\)', isCorrect: false },
            { key: 'b', text: '\\(7\\)', isCorrect: false },
            { key: 'c', text: '\\(-12\\)', isCorrect: true },
            { key: 'd', text: '\\(-7\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Find the value of \\(a\\):</strong></div>
            <div class="sol-math">\\[a = |-4| = 4\\]</div>
            <div class="sol-step"><strong>Step 2: Calculate product \\(ab\\):</strong></div>
            <div class="sol-math">\\[ab = 4 \\times (-3) = -12\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(c) -12</strong></div>
          `
        },
        {
          id: 'W4_B3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Properties of Addition in Z',
          prompt: '1) Use the addition properties in \\(\\mathbb{Z}\\) to find the result of: \\((-25) + 1 + 25\\)',
          modelSolution: `
            <div class="sol-step"><strong>Given Expression:</strong></div>
            <div class="sol-math">\\[(-25) + 1 + 25\\]</div>
            <div class="sol-step"><strong>Step 1: Commutative Property:</strong></div>
            <div class="sol-math">\\[= (-25) + 25 + 1 \\quad \\text{(Commutative Property)}\\]</div>
            <div class="sol-step"><strong>Step 2: Associative Property:</strong></div>
            <div class="sol-math">\\[= [(-25) + 25] + 1 \\quad \\text{(Associative Property)}\\]</div>
            <div class="sol-step"><strong>Step 3: Additive Inverse Property:</strong></div>
            <div class="sol-math">\\[= 0 + 1 \\quad \\text{(Additive Inverse Property)}\\]</div>
            <div class="sol-step"><strong>Step 4: Additive Identity Property:</strong></div>
            <div class="sol-math">\\[= 1 \\quad \\text{(Additive Identity Property)}\\]</div>
            <div class="sol-highlight">The final result is <strong>1</strong></div>
          `
        },
        {
          id: 'W4_B4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Algebraic Substitution & Order of Operations',
          prompt: '2) If \\(a = 2\\), \\(b = 5\\), \\(c = -2\\). Find in simplest form the value of the expression: \\((a + 2b) \\div c\\)',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Substitute the given values:</strong></div>
            <div class="sol-math">\\[(a + 2b) \\div c = (2 + 2(5)) \\div (-2)\\]</div>
            <div class="sol-step"><strong>Step 2: Evaluate operations in parentheses:</strong></div>
            <div class="sol-math">\\[2(5) = 10 \\implies 2 + 10 = 12\\]</div>
            <div class="sol-step"><strong>Step 3: Perform division:</strong></div>
            <div class="sol-math">\\[12 \\div (-2) = -6\\]</div>
            <div class="sol-highlight">The simplest form is <strong>-6</strong></div>
          `
        },
        {
          id: 'W4_B5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Operations with Absolute Values & Division',
          prompt: `
            3) If \\(a = 15\\), \\(b = -2\\). Find the result of:
            <div style="margin-top: 0.6rem; font-size: 1.15rem; font-weight: 700;">
              (1) \\(|ab|\\) &emsp;&emsp; (2) \\(|b + a|\\) &emsp;&emsp; (3) \\(12 \\div b\\)
            </div>
          `,
          modelSolution: `
            <div class="sol-step"><strong>(1) Find \\(|ab|\\):</strong></div>
            <div class="sol-math">\\[ab = 15 \\times (-2) = -30\\]</div>
            <div class="sol-math">\\[|ab| = |-30| = 30\\]</div>
            <div class="sol-step"><strong>(2) Find \\(|b + a|\\):</strong></div>
            <div class="sol-math">\\[b + a = -2 + 15 = 13\\]</div>
            <div class="sol-math">\\[|b + a| = |13| = 13\\]</div>
            <div class="sol-step"><strong>(3) Find \\(12 \\div b\\):</strong></div>
            <div class="sol-math">\\[12 \\div (-2) = -6\\]</div>
            <div class="sol-highlight">(1) \\(|ab| = \\mathbf{30}\\) &nbsp;|&nbsp; (2) \\(|b + a| = \\mathbf{13}\\) &nbsp;|&nbsp; (3) \\(12 \\div b = \\mathbf{-6}\\)</div>
          `
        }
      ]
    },
    groupC: {
      id: 'groupC',
      title: 'Group (C)',
      badgeName: 'Group (C) • Week 4 Assessment',
      questions: [
        {
          id: 'W4_C1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Subtraction of Integers',
          prompt: '1) \\(-6 - (-1) = \\dots\\dots\\dots\\dots\\)',
          options: [
            { key: 'a', text: '\\(5\\)', isCorrect: false },
            { key: 'b', text: '\\(-5\\)', isCorrect: true },
            { key: 'c', text: '\\(7\\)', isCorrect: false },
            { key: 'd', text: '\\(-7\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Simplify subtracting a negative:</strong></div>
            <div class="sol-math">\\[-6 - (-1) = -6 + 1\\]</div>
            <div class="sol-step"><strong>Step 2: Add integers:</strong></div>
            <div class="sol-math">\\[-6 + 1 = -5\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) -5</strong></div>
          `
        },
        {
          id: 'W4_C2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Absolute Value & Multiplication',
          prompt: '2) If \\(a = |-9|\\) , \\(b = -1\\) . What is the value of \\(ab\\) ?',
          options: [
            { key: 'a', text: '\\(10\\)', isCorrect: false },
            { key: 'b', text: '\\(9\\)', isCorrect: false },
            { key: 'c', text: '\\(-9\\)', isCorrect: true },
            { key: 'd', text: '\\(-10\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Evaluate absolute value:</strong></div>
            <div class="sol-math">\\[a = |-9| = 9\\]</div>
            <div class="sol-step"><strong>Step 2: Multiply \\(a \\times b\\):</strong></div>
            <div class="sol-math">\\[ab = 9 \\times (-1) = -9\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(c) -9</strong></div>
          `
        },
        {
          id: 'W4_C3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Properties of Addition in Z',
          prompt: '1) Use the addition properties in \\(\\mathbb{Z}\\) to find the result of: \\((-17) + 3 + 17\\)',
          modelSolution: `
            <div class="sol-step"><strong>Given Expression:</strong></div>
            <div class="sol-math">\\[(-17) + 3 + 17\\]</div>
            <div class="sol-step"><strong>Step 1: Commutative Property:</strong></div>
            <div class="sol-math">\\[= (-17) + 17 + 3 \\quad \\text{(Commutative Property)}\\]</div>
            <div class="sol-step"><strong>Step 2: Associative Property:</strong></div>
            <div class="sol-math">\\[= [(-17) + 17] + 3 \\quad \\text{(Associative Property)}\\]</div>
            <div class="sol-step"><strong>Step 3: Additive Inverse Property:</strong></div>
            <div class="sol-math">\\[= 0 + 3 \\quad \\text{(Additive Inverse Property)}\\]</div>
            <div class="sol-step"><strong>Step 4: Additive Identity Property:</strong></div>
            <div class="sol-math">\\[= 3 \\quad \\text{(Additive Identity Property)}\\]</div>
            <div class="sol-highlight">The final result is <strong>3</strong></div>
          `
        },
        {
          id: 'W4_C4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Algebraic Substitution & Order of Operations',
          prompt: '2) If \\(a = 1\\), \\(b = 7\\), \\(c = -3\\). Find in simplest form the value of the expression: \\((5a + b) \\div c\\)',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Substitute the given values:</strong></div>
            <div class="sol-math">\\[(5a + b) \\div c = (5(1) + 7) \\div (-3)\\]</div>
            <div class="sol-step"><strong>Step 2: Calculate inside parentheses:</strong></div>
            <div class="sol-math">\\[5(1) + 7 = 5 + 7 = 12\\]</div>
            <div class="sol-step"><strong>Step 3: Perform division:</strong></div>
            <div class="sol-math">\\[12 \\div (-3) = -4\\]</div>
            <div class="sol-highlight">The simplest form is <strong>-4</strong></div>
          `
        },
        {
          id: 'W4_C5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Operations with Absolute Values & Division',
          prompt: `
            3) If \\(a = 12\\), \\(b = -4\\). Find the result of:
            <div style="margin-top: 0.6rem; font-size: 1.15rem; font-weight: 700;">
              (1) \\(|ab|\\) &emsp;&emsp; (2) \\(|a + b|\\) &emsp;&emsp; (3) \\(24 \\div b\\)
            </div>
          `,
          modelSolution: `
            <div class="sol-step"><strong>(1) Find \\(|ab|\\):</strong></div>
            <div class="sol-math">\\[ab = 12 \\times (-4) = -48\\]</div>
            <div class="sol-math">\\[|ab| = |-48| = 48\\]</div>
            <div class="sol-step"><strong>(2) Find \\(|a + b|\\):</strong></div>
            <div class="sol-math">\\[a + b = 12 + (-4) = 8\\]</div>
            <div class="sol-math">\\[|a + b| = |8| = 8\\]</div>
            <div class="sol-step"><strong>(3) Find \\(24 \\div b\\):</strong></div>
            <div class="sol-math">\\[24 \\div (-4) = -6\\]</div>
            <div class="sol-highlight">(1) \\(|ab| = \\mathbf{48}\\) &nbsp;|&nbsp; (2) \\(|a + b| = \\mathbf{8}\\) &nbsp;|&nbsp; (3) \\(24 \\div b = \\mathbf{-6}\\)</div>
          `
        }
      ]
    }
  },

  // ========================================================================
  // WEEK 5: OPERATIONS IN RATIONAL NUMBERS (Q) & INVERSES
  // ========================================================================
  week5: {
    id: 'week5',
    title: 'Week 5: Operations in Rational Numbers (Q) & Inverses',
    stageName: 'Weekly Assessment – Week 5 (Rational Numbers Q)',
    groupA: {
      id: 'groupA',
      title: 'Group (A)',
      badgeName: 'Group (A) • Week 5 Assessment',
      questions: [
        {
          id: 'W5_A1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Subtraction of Rational Numbers',
          prompt: '1) The result of subtracting \\(\\frac{3}{5}\\) from \\(\\frac{7}{10}\\) equal to \\(\\dots\\dots\\dots\\dots\\)',
          options: [
            { key: 'a', text: '\\(\\frac{4}{5}\\)', isCorrect: false },
            { key: 'b', text: '\\(\\frac{1}{5}\\)', isCorrect: false },
            { key: 'c', text: '\\(\\frac{1}{10}\\)', isCorrect: true },
            { key: 'd', text: '\\(-\\frac{4}{5}\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set up the subtraction:</strong></div>
            <div class="sol-step">"Subtracting \\(A\\) from \\(B\\)" means: \\(B - A\\):</div>
            <div class="sol-math">\\[\\frac{7}{10} - \\frac{3}{5}\\]</div>
            <div class="sol-step"><strong>Step 2: Unify denominators (common denominator 10):</strong></div>
            <div class="sol-math">\\[\\frac{3}{5} = \\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10}\\]</div>
            <div class="sol-step"><strong>Step 3: Subtract numerators:</strong></div>
            <div class="sol-math">\\[\\frac{7}{10} - \\frac{6}{10} = \\frac{7 - 6}{10} = \\frac{1}{10}\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(c) \\(\\frac{1}{10}\\)</strong></div>
          `
        },
        {
          id: 'W5_A2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Multiplicative Inverse of a Mixed Number',
          prompt: '2) What is the multiplicative inverse of \\(3\\frac{1}{2}\\) ?',
          options: [
            { key: 'a', text: '\\(\\frac{7}{2}\\)', isCorrect: false },
            { key: 'b', text: '\\(2\\frac{1}{3}\\)', isCorrect: false },
            { key: 'c', text: '\\(-\\frac{2}{7}\\)', isCorrect: false },
            { key: 'd', text: '\\(\\frac{2}{7}\\)', isCorrect: true }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Convert the mixed number into an improper fraction:</strong></div>
            <div class="sol-math">\\[3\\frac{1}{2} = \\frac{3 \\times 2 + 1}{2} = \\frac{7}{2}\\]</div>
            <div class="sol-step"><strong>Step 2: Find the multiplicative inverse (reciprocal):</strong></div>
            <div class="sol-step">Invert numerator and denominator:</div>
            <div class="sol-math">\\[\\text{Multiplicative Inverse of } \\frac{7}{2} = \\frac{2}{7}\\]</div>
            <div class="sol-step"><em>Check:</em> \\(\\frac{7}{2} \\times \\frac{2}{7} = 1\\) &check;</div>
            <div class="sol-highlight">The correct answer is <strong>(d) \\(\\frac{2}{7}\\)</strong></div>
          `
        },
        {
          id: 'W5_A3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Properties of Addition in Q',
          prompt: '1) Using properties of addition in \\(\\mathbb{Q}\\) to find the result of: \\(\\frac{1}{4} + \\frac{2}{10} + \\frac{-1}{4} + \\frac{-4}{10}\\) in its simplest form.',
          modelSolution: `
            <div class="sol-step"><strong>Given Expression:</strong></div>
            <div class="sol-math">\\[\\frac{1}{4} + \\frac{2}{10} + \\frac{-1}{4} + \\frac{-4}{10}\\]</div>
            <div class="sol-step"><strong>Step 1: Commutative & Associative Properties:</strong></div>
            <div class="sol-step">Group fractions with common denominators:</div>
            <div class="sol-math">\\[= \\left(\\frac{1}{4} + \\frac{-1}{4}\right) + \\left(\\frac{2}{10} + \\frac{-4}{10}\right)\\]</div>
            <div class="sol-step"><strong>Step 2: Additive Inverse Property:</strong></div>
            <div class="sol-step">The sum of a number and its additive inverse is 0: \\(\\frac{1}{4} + \\frac{-1}{4} = 0\\):</div>
            <div class="sol-math">\\[= 0 + \\left(\\frac{2 + (-4)}{10}\right) = 0 + \\left(\\frac{-2}{10}\right)\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify to lowest terms:</strong></div>
            <div class="sol-math">\\[= \\frac{-2}{10} = \\frac{-2 \\div 2}{10 \\div 2} = -\\frac{1}{5}\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>\\(-\\frac{1}{5}\\)</strong></div>
          `
        },
        {
          id: 'W5_A4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Algebraic Substitution with Rational Numbers',
          prompt: '2) If \\(x = \\frac{-2}{4}\\), \\(y = \\frac{4}{9}\\), find the result of \\(2x + y\\) in its simplest form.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Simplify \\(x\\):</strong></div>
            <div class="sol-math">\\[x = \\frac{-2}{4} = -\\frac{1}{2}\\]</div>
            <div class="sol-step"><strong>Step 2: Calculate \\(2x\\):</strong></div>
            <div class="sol-math">\\[2x = 2 \\times \\left(-\\frac{1}{2}\\right) = -1 = -\\frac{9}{9}\\]</div>
            <div class="sol-step"><strong>Step 3: Add \\(y = \\frac{4}{9}\\):</strong></div>
            <div class="sol-math">\\[2x + y = -1 + \\frac{4}{9} = \\frac{-9 + 4}{9} = -\\frac{5}{9}\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>\\(-\\frac{5}{9}\\)</strong></div>
          `
        },
        {
          id: 'W5_A5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Order of Operations with Rational Numbers',
          prompt: '3) Find in its simplest form the value of: \\(\\frac{4}{10} \\div \\left(\\frac{-1}{5} + \\frac{3}{5}\\right)\\)',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Evaluate operation inside parentheses:</strong></div>
            <div class="sol-math">\\[\\frac{-1}{5} + \\frac{3}{5} = \\frac{-1 + 3}{5} = \\frac{2}{5}\\]</div>
            <div class="sol-step"><strong>Step 2: Simplify \\(\\frac{4}{10}\\):</strong></div>
            <div class="sol-math">\\[\\frac{4}{10} = \\frac{2}{5}\\]</div>
            <div class="sol-step"><strong>Step 3: Perform division (multiply by reciprocal):</strong></div>
            <div class="sol-math">\\[\\frac{2}{5} \\div \\frac{2}{5} = \\frac{2}{5} \\times \\frac{5}{2} = 1\\]</div>
            <div class="sol-highlight">The value in simplest form is <strong>1</strong></div>
          `
        }
      ]
    },
    groupB: {
      id: 'groupB',
      title: 'Group (B)',
      badgeName: 'Group (B) • Week 5 Assessment',
      questions: [
        {
          id: 'W5_B1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Subtraction of Rational Numbers',
          prompt: '1) The result of subtracting \\(\\frac{1}{4}\\) from \\(\\frac{3}{4}\\) equal to \\(\\dots\\dots\\dots\\dots\\)',
          options: [
            { key: 'a', text: '\\(\\frac{5}{4}\\)', isCorrect: false },
            { key: 'b', text: '\\(\\frac{1}{2}\\)', isCorrect: true },
            { key: 'c', text: '\\(\\frac{1}{4}\\)', isCorrect: false },
            { key: 'd', text: '\\(-\\frac{1}{2}\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set up subtraction \\(B - A\\):</strong></div>
            <div class="sol-math">\\[\\frac{3}{4} - \\frac{1}{4}\\]</div>
            <div class="sol-step"><strong>Step 2: Subtract numerators with common denominator 4:</strong></div>
            <div class="sol-math">\\[\\frac{3 - 1}{4} = \\frac{2}{4}\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify by dividing by 2:</strong></div>
            <div class="sol-math">\\[\\frac{2 \\div 2}{4 \\div 2} = \\frac{1}{2}\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(b) \\(\\frac{1}{2}\\)</strong></div>
          `
        },
        {
          id: 'W5_B2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Multiplicative Inverse of a Mixed Number',
          prompt: '2) What is the multiplicative inverse of \\(4\\frac{1}{2}\\) ?',
          options: [
            { key: 'a', text: '\\(\\frac{9}{2}\\)', isCorrect: false },
            { key: 'b', text: '\\(2\\frac{1}{4}\\)', isCorrect: false },
            { key: 'c', text: '\\(-\\frac{2}{9}\\)', isCorrect: false },
            { key: 'd', text: '\\(\\frac{2}{9}\\)', isCorrect: true }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Convert mixed number into improper fraction:</strong></div>
            <div class="sol-math">\\[4\\frac{1}{2} = \\frac{4 \\times 2 + 1}{2} = \\frac{9}{2}\\]</div>
            <div class="sol-step"><strong>Step 2: Find reciprocal (swap numerator and denominator):</strong></div>
            <div class="sol-math">\\[\\text{Multiplicative Inverse of } \\frac{9}{2} = \\frac{2}{9}\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(d) \\(\\frac{2}{9}\\)</strong></div>
          `
        },
        {
          id: 'W5_B3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Properties of Addition in Q',
          prompt: '1) Using properties of addition in \\(\\mathbb{Q}\\) to find the result of: \\(\\frac{1}{3} + \\frac{2}{6} + \\frac{-1}{3} + \\frac{-4}{6}\\) in its simplest form.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Commutative & Associative Properties:</strong></div>
            <div class="sol-step">Group fractions with matching denominators:</div>
            <div class="sol-math">\\[= \\left(\\frac{1}{3} + \\frac{-1}{3}\\right) + \\left(\\frac{2}{6} + \\frac{-4}{6}\\right)\\]</div>
            <div class="sol-step"><strong>Step 2: Additive Inverse Property:</strong></div>
            <div class="sol-math">\\[= 0 + \\left(\\frac{2 + (-4)}{6}\\right) = 0 + \\left(\\frac{-2}{6}\\right)\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify fraction to lowest terms:</strong></div>
            <div class="sol-math">\\[= \\frac{-2}{6} = \\frac{-2 \\div 2}{6 \\div 2} = -\\frac{1}{3}\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>\\(-\\frac{1}{3}\\)</strong></div>
          `
        },
        {
          id: 'W5_B4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Algebraic Substitution with Rational Numbers',
          prompt: '2) If \\(x = \\frac{-2}{5}\\), \\(y = \\frac{6}{5}\\), find the result of \\(3x + y\\) in its simplest form.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Calculate \\(3x\\):</strong></div>
            <div class="sol-math">\\[3x = 3 \\times \\left(\\frac{-2}{5}\\right) = \\frac{-6}{5}\\]</div>
            <div class="sol-step"><strong>Step 2: Add \\(y = \\frac{6}{5}\\):</strong></div>
            <div class="sol-math">\\[3x + y = \\frac{-6}{5} + \\frac{6}{5} = \\frac{-6 + 6}{5} = \\frac{0}{5} = 0\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>0</strong></div>
          `
        },
        {
          id: 'W5_B5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Order of Operations with Rational Numbers',
          prompt: '3) Find in its simplest form the value of: \\(\\left(\\frac{5}{7} + \\frac{1}{7}\\right) \\div \\frac{12}{14}\\)',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Calculate inside parentheses:</strong></div>
            <div class="sol-math">\\[\\frac{5}{7} + \\frac{1}{7} = \\frac{5 + 1}{7} = \\frac{6}{7}\\]</div>
            <div class="sol-step"><strong>Step 2: Simplify the divisor \\(\\frac{12}{14}\\):</strong></div>
            <div class="sol-math">\\[\\frac{12}{14} = \\frac{12 \\div 2}{14 \\div 2} = \\frac{6}{7}\\]</div>
            <div class="sol-step"><strong>Step 3: Perform division:</strong></div>
            <div class="sol-math">\\[\\frac{6}{7} \\div \\frac{6}{7} = 1\\]</div>
            <div class="sol-highlight">The value in simplest form is <strong>1</strong></div>
          `
        }
      ]
    },
    groupC: {
      id: 'groupC',
      title: 'Group (C)',
      badgeName: 'Group (C) • Week 5 Assessment',
      questions: [
        {
          id: 'W5_C1',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 1,
          title: 'Subtraction of Rational Numbers',
          prompt: '1) The result of subtracting \\(\\frac{1}{7}\\) from \\(\\frac{8}{7}\\) equal to \\(\\dots\\dots\\dots\\dots\\)',
          options: [
            { key: 'a', text: '\\(1\\)', isCorrect: true },
            { key: 'b', text: '\\(\\frac{9}{7}\\)', isCorrect: false },
            { key: 'c', text: '\\(-1\\)', isCorrect: false },
            { key: 'd', text: '\\(-\\frac{9}{7}\\)', isCorrect: false }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Set up subtraction \\(B - A\\):</strong></div>
            <div class="sol-math">\\[\\frac{8}{7} - \\frac{1}{7}\\]</div>
            <div class="sol-step"><strong>Step 2: Subtract numerators with common denominator 7:</strong></div>
            <div class="sol-math">\\[\\frac{8 - 1}{7} = \\frac{7}{7} = 1\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(a) 1</strong></div>
          `
        },
        {
          id: 'W5_C2',
          type: 'mcq',
          category: 'First: Choose the correct answer',
          questionNum: 2,
          title: 'Multiplicative Inverse of a Mixed Number',
          prompt: '2) What is the multiplicative inverse of \\(7\\frac{1}{2}\\) ?',
          options: [
            { key: 'a', text: '\\(\\frac{15}{2}\\)', isCorrect: false },
            { key: 'b', text: '\\(2\\frac{1}{7}\\)', isCorrect: false },
            { key: 'c', text: '\\(-\\frac{15}{7}\\)', isCorrect: false },
            { key: 'd', text: '\\(\\frac{2}{15}\\)', isCorrect: true }
          ],
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Convert mixed number into improper fraction:</strong></div>
            <div class="sol-math">\\[7\\frac{1}{2} = \\frac{7 \\times 2 + 1}{2} = \\frac{15}{2}\\]</div>
            <div class="sol-step"><strong>Step 2: Multiplicative inverse (reciprocal):</strong></div>
            <div class="sol-math">\\[\\text{Multiplicative Inverse of } \\frac{15}{2} = \\frac{2}{15}\\]</div>
            <div class="sol-highlight">The correct answer is <strong>(d) \\(\\frac{2}{15}\\)</strong></div>
          `
        },
        {
          id: 'W5_C3',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 3,
          title: 'Properties of Addition in Q',
          prompt: '1) Using properties of addition in \\(\\mathbb{Q}\\) to find: \\(\\frac{-4}{3} + \\frac{-1}{9} + \\frac{5}{3} + \\frac{1}{9}\\) in its simplest form.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Commutative & Associative Properties:</strong></div>
            <div class="sol-step">Group terms with denominator 3 and denominator 9 together:</div>
            <div class="sol-math">\\[= \\left(\\frac{-4}{3} + \\frac{5}{3}\right) + \\left(\\frac{-1}{9} + \\frac{1}{9}\right)\\]</div>
            <div class="sol-step"><strong>Step 2: Additive Inverse Property:</strong></div>
            <div class="sol-step">Notice \\(\\frac{-1}{9} + \\frac{1}{9} = 0\\):</div>
            <div class="sol-math">\\[= \\left(\\frac{-4 + 5}{3}\right) + 0\\]</div>
            <div class="sol-step"><strong>Step 3: Additive Identity:</strong></div>
            <div class="sol-math">\\[= \\frac{1}{3} + 0 = \\frac{1}{3}\\]</div>
            <div class="sol-highlight">The result in simplest form is <strong>\\(\\frac{1}{3}\\)</strong></div>
          `
        },
        {
          id: 'W5_C4',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 4,
          title: 'Algebraic Substitution with Rational Numbers',
          prompt: '2) If \\(x = \\frac{-2}{7}\\), \\(y = \\frac{8}{7}\\), find the value of: \\(4x + y\\) in its simplest form.',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Calculate \\(4x\\):</strong></div>
            <div class="sol-math">\\[4x = 4 \\times \\left(\\frac{-2}{7}\\right) = \\frac{-8}{7}\\]</div>
            <div class="sol-step"><strong>Step 2: Add \\(y = \\frac{8}{7}\\):</strong></div>
            <div class="sol-math">\\[4x + y = \\frac{-8}{7} + \\frac{8}{7} = \\frac{-8 + 8}{7} = \\frac{0}{7} = 0\\]</div>
            <div class="sol-highlight">The simplest form is <strong>0</strong></div>
          `
        },
        {
          id: 'W5_C5',
          type: 'problem',
          category: 'Second: Answer the following',
          questionNum: 5,
          title: 'Order of Operations with Rational Numbers',
          prompt: '3) Find in its simplest form the value of: \\(\\left(\\frac{3}{11} + \\frac{1}{11}\\right) \\div \\frac{4}{33}\\)',
          modelSolution: `
            <div class="sol-step"><strong>Step 1: Calculate operation inside parentheses:</strong></div>
            <div class="sol-math">\\[\\frac{3}{11} + \\frac{1}{11} = \\frac{3 + 1}{11} = \\frac{4}{11}\\]</div>
            <div class="sol-step"><strong>Step 2: Perform division (multiply by reciprocal):</strong></div>
            <div class="sol-math">\\[\\frac{4}{11} \\div \\frac{4}{33} = \\frac{4}{11} \\times \\frac{33}{4}\\]</div>
            <div class="sol-step"><strong>Step 3: Simplify by cross-cancelling:</strong></div>
            <div class="sol-math">\\[\\frac{4 \\div 4}{11} \\times \\frac{33}{4 \\div 4} = \\frac{33}{11} = 3\\]</div>
            <div class="sol-highlight">The value in simplest form is <strong>3</strong></div>
          `
        }
      ]
    }
  }
};

// Alias for backward compatibility: Prep 3 assessments officially start from Week 2
WEEKS_DATA.prep3_week1 = WEEKS_DATA.prep3_week2;

// Aliases for Prep 1 weeks
WEEKS_DATA.prep1_week2 = WEEKS_DATA.week2;
WEEKS_DATA.prep1_week3 = WEEKS_DATA.week3;
WEEKS_DATA.prep1_week4 = WEEKS_DATA.week4;
WEEKS_DATA.prep1_week5 = WEEKS_DATA.week5;
