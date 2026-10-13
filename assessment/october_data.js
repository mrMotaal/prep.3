/* ==========================================================================
   PREP 3 • OCTOBER MONTHLY REVISION DATA REPOSITORY
   School Book & Weekly Assessments Comprehensive Bank (48 Questions)
   Curriculum: Preparatory 3 Mathematics (Language Schools / Official Standard)
   Educator: Mr Ahmed Abd El-Motaal
   ========================================================================== */

(function() {
  // Make sure WEEKS_DATA is accessible
  var targetData = (typeof WEEKS_DATA !== 'undefined') ? WEEKS_DATA : (window.WEEKS_DATA || (window.WEEKS_DATA = {}));

  // --- 18 Multiple Choice Questions (MCQ) ---
  const mcqQuestions = [
    // LESSON 1: Laws of Exponents & Power of a Power
    {
      id: 'OCT_MCQ_1',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 1,
      title: 'Law of Exponents (Power of a Power)',
      prompt: '1) Which of the following is equal to \\((a^2)^4 \\times a^5\\)?',
      options: [
        { key: 'a', text: '\\(a^{11}\\)', isCorrect: false },
        { key: 'b', text: '\\(a^{13}\\)', isCorrect: true },
        { key: 'c', text: '\\(a^{40}\\)', isCorrect: false },
        { key: 'd', text: '\\(a^{30}\\)', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Power of a Power Law:</strong></div>
        <div class="sol-math">\\[(a^2)^4 = a^{2 \\times 4} = a^8\\]</div>
        <div class="sol-step"><strong>Step 2: Multiplying like bases adds exponents:</strong></div>
        <div class="sol-math">\\[a^8 \\times a^5 = a^{8 + 5} = a^{13}\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(b) \\(a^{13}\\)</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_2',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 2,
      title: 'Evaluating Power of a Power',
      prompt: '2) The value of \\((x^2 y^3)^2\\) when \\(x = 1, y = 2\\) is equal to ........',
      options: [
        { key: 'a', text: '8', isCorrect: false },
        { key: 'b', text: '16', isCorrect: false },
        { key: 'c', text: '32', isCorrect: false },
        { key: 'd', text: '64', isCorrect: true }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Distribute outer power:</strong></div>
        <div class="sol-math">\\[(x^2 y^3)^2 = x^{2 \\times 2} \\cdot y^{3 \\times 2} = x^4 y^6\\]</div>
        <div class="sol-step"><strong>Step 2: Substitute \\(x = 1, y = 2\\):</strong></div>
        <div class="sol-math">\\[(1)^4 \\times (2)^6 = 1 \\times 64 = 64\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(d) 64</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_3',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 3,
      title: 'Equivalent Exponential Expression',
      prompt: '3) If \\(b = 3^{x+1}\\), which of the following is equal to \\(9^{x+1}\\)?',
      options: [
        { key: 'a', text: '\\(27 b^2\\)', isCorrect: false },
        { key: 'b', text: '\\(3 b^2\\)', isCorrect: false },
        { key: 'c', text: '\\(9 b^2\\)', isCorrect: false },
        { key: 'd', text: '\\(b^2\\)', isCorrect: true }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Express base 9 as a power of 3:</strong></div>
        <div class="sol-math">\\[9 = 3^2 \\implies 9^{x+1} = (3^2)^{x+1} = (3^{x+1})^2\\]</div>
        <div class="sol-step"><strong>Step 2: Substitute \\(b = 3^{x+1}\\):</strong></div>
        <div class="sol-math">\\[(3^{x+1})^2 = b^2\\]</div>
        <div class="sol-step"><em>Note: If the given was \\(b = 3^x\\), then \\(9^{x+1} = 9 \\cdot 9^x = 9b^2\\).</em></div>
        <div class="sol-highlight">The correct answer is <strong>(d) \\(b^2\\)</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_4',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 4,
      title: 'Simplifying Algebraic Powers',
      prompt: '4) The result of \\(\\frac{(-2a^2)^3}{2a}\\) in simplest form is ........',
      options: [
        { key: 'a', text: '\\(-4 a^5\\)', isCorrect: true },
        { key: 'b', text: '\\(4 a^5\\)', isCorrect: false },
        { key: 'c', text: '\\(-4 a^6\\)', isCorrect: false },
        { key: 'd', text: '\\(-8 a^5\\)', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Simplify numerator:</strong></div>
        <div class="sol-math">\\[(-2a^2)^3 = (-2)^3 \\cdot (a^2)^3 = -8a^6\\]</div>
        <div class="sol-step"><strong>Step 2: Divide by denominator:</strong></div>
        <div class="sol-math">\\[\\frac{-8a^6}{2a} = -4a^{6 - 1} = -4a^5\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(a) \\(-4a^5\\)</strong></div>
      `
    },

    // LESSON 2: Exponential Equations
    {
      id: 'OCT_MCQ_5',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 5,
      title: 'Exponential Equation with Powers of 3',
      prompt: '5) If \\(\\frac{3^x \\times 27^x}{81^x} = 2^{-2x}\\), what is the value of \\(x\\)?',
      options: [
        { key: 'a', text: '0', isCorrect: true },
        { key: 'b', text: '1', isCorrect: false },
        { key: 'c', text: '2', isCorrect: false },
        { key: 'd', text: '-1', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Simplify LHS with base 3:</strong></div>
        <div class="sol-math">\\[\\frac{3^x \\times (3^3)^x}{(3^4)^x} = \\frac{3^x \\times 3^{3x}}{3^{4x}} = \\frac{3^{4x}}{3^{4x}} = 1\\]</div>
        <div class="sol-step"><strong>Step 2: Equate to RHS:</strong></div>
        <div class="sol-math">\\[2^{-2x} = 1 = 2^0 \\implies -2x = 0 \\implies x = 0\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(a) 0</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_6',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 6,
      title: 'Negative Exponent Equation',
      prompt: '6) If \\(4^{-x} = 8\\), what is the value of \\(x\\)?',
      options: [
        { key: 'a', text: '1', isCorrect: false },
        { key: 'b', text: '2', isCorrect: false },
        { key: 'c', text: '\\(-\\frac{2}{3}\\)', isCorrect: false },
        { key: 'd', text: '\\(-\\frac{3}{2}\\)', isCorrect: true }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Express both sides with base 2:</strong></div>
        <div class="sol-math">\\[4^{-x} = (2^2)^{-x} = 2^{-2x} \\quad \\text{and} \\quad 8 = 2^3\\]</div>
        <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
        <div class="sol-math">\\[-2x = 3 \\implies x = -\\frac{3}{2}\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(d) \\(-\\frac{3}{2}\\)</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_7',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 7,
      title: 'Zero Power Law Equation',
      prompt: '7) If \\(13^{n-5} = 1\\), what is the value of \\(n\\)?',
      options: [
        { key: 'a', text: '2', isCorrect: false },
        { key: 'b', text: '3', isCorrect: false },
        { key: 'c', text: '4', isCorrect: false },
        { key: 'd', text: '5', isCorrect: true }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Property of zero exponent:</strong></div>
        <div class="sol-math">\\[13^{n-5} = 13^0\\]</div>
        <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
        <div class="sol-math">\\[n - 5 = 0 \\implies n = 5\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(d) 5</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_8',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 8,
      title: 'Equal Exponents with Different Bases',
      prompt: '8) If \\(5^{x+1} = 7^{x+1}\\), then \\(x = ........ \\)',
      options: [
        { key: 'a', text: '1', isCorrect: false },
        { key: 'b', text: '-1', isCorrect: true },
        { key: 'c', text: '0', isCorrect: false },
        { key: 'd', text: '\\(-\\frac{5}{7}\\)', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Analyze bases and exponents:</strong></div>
        <div class="sol-step">Since bases are not equal (\\(5 \\ne 7\\)) and exponents are equal, the exponent must equal zero.</div>
        <div class="sol-math">\\[x + 1 = 0 \\implies x = -1\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(b) -1</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_9',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 9,
      title: 'Solving and Evaluating Power',
      prompt: '9) If \\(5^{x-3} = 1\\), then \\(2^x = ........ \\)',
      options: [
        { key: 'a', text: '8', isCorrect: true },
        { key: 'b', text: '6', isCorrect: false },
        { key: 'c', text: '1', isCorrect: false },
        { key: 'd', text: '16', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Solve for \\(x\\):</strong></div>
        <div class="sol-math">\\[5^{x-3} = 1 = 5^0 \\implies x - 3 = 0 \\implies x = 3\\]</div>
        <div class="sol-step"><strong>Step 2: Calculate \\(2^x\\):</strong></div>
        <div class="sol-math">\\[2^x = 2^3 = 8\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(a) 8</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_10',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 10,
      title: 'Repeated Addition of Exponential Terms',
      prompt: '10) If \\(2^a + 2^a + 2^a = 24\\), then \\(a = ........ \\)',
      options: [
        { key: 'a', text: '2', isCorrect: false },
        { key: 'b', text: '3', isCorrect: true },
        { key: 'c', text: '4', isCorrect: false },
        { key: 'd', text: '8', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Convert repeated addition to multiplication:</strong></div>
        <div class="sol-math">\\[3 \\times 2^a = 24\\]</div>
        <div class="sol-step"><strong>Step 2: Divide both sides by 3:</strong></div>
        <div class="sol-math">\\[2^a = \\frac{24}{3} = 8 = 2^3 \\implies a = 3\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(b) 3</strong></div>
      `
    },

    // LESSON 3: Quadratic Functions
    {
      id: 'OCT_MCQ_11',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 11,
      title: 'Identifying Graph of Quadratic Function',
      prompt: '11) Which of the following graphs represents the function \\(f(x) = x^2 - 1\\)?',
      options: [
        { key: 'a', text: 'Parabola with vertex (0, -4) opening upwards', isCorrect: false },
        { key: 'b', text: 'Parabola with vertex (-1, 0) opening upwards', isCorrect: false },
        { key: 'c', text: 'Parabola opening upwards with vertex (0, -1) and x-intercepts (-1, 0) & (1, 0)', isCorrect: true },
        { key: 'd', text: 'Parabola with vertex (0, 1) opening upwards', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Direction of opening:</strong> Coefficient of \\(x^2\\) is \\(+1 > 0\\), so the parabola opens upwards.</div>
        <div class="sol-step"><strong>Step 2: Vertex coordinates:</strong> \\(x_v = 0 \\implies f(0) = -1 \\implies \\text{Vertex} = (0, -1)\\).</div>
        <div class="sol-step"><strong>Step 3: \\(x\\)-intercepts:</strong> \\(x^2 - 1 = 0 \\implies x = \\pm 1 \\implies (-1, 0) \\text{ and } (1, 0)\\).</div>
        <div class="sol-highlight">The correct answer is <strong>(c)</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_12',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 12,
      title: 'Vertex of Quadratic Curve in Vertex Form',
      prompt: '12) The vertex of the curve for the function \\(f(x) = (x - 3)^2 + 1\\) is ........',
      options: [
        { key: 'a', text: '(3, 1)', isCorrect: true },
        { key: 'b', text: '(-3, 1)', isCorrect: false },
        { key: 'c', text: '(3, -1)', isCorrect: false },
        { key: 'd', text: '(1, 3)', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Standard vertex form:</strong></div>
        <div class="sol-math">\\[f(x) = a(x - h)^2 + k \\implies \\text{Vertex} = (h, k)\\]</div>
        <div class="sol-step"><strong>Step 2: Compare parameters:</strong></div>
        <div class="sol-math">\\[h = 3, \\quad k = 1 \\implies \\text{Vertex} = (3, 1)\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(a) (3, 1)</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_13',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 13,
      title: 'Intersection of Quadratic Curve with y-Axis',
      prompt: '13) The curve of the function \\(f(x) = x^2 + 3x - 4\\) intersects the \\(y\\)-axis at the point ........',
      options: [
        { key: 'a', text: '(0, -4)', isCorrect: true },
        { key: 'b', text: '(-4, 0)', isCorrect: false },
        { key: 'c', text: '(0, 4)', isCorrect: false },
        { key: 'd', text: '(1, 0)', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Condition for y-intercept:</strong> Set \\(x = 0\\).</div>
        <div class="sol-math">\\[f(0) = (0)^2 + 3(0) - 4 = -4\\]</div>
        <div class="sol-step"><strong>Step 2: Point of intersection:</strong> \\((0, -4)\\).</div>
        <div class="sol-highlight">The correct answer is <strong>(a) (0, -4)</strong></div>
      `
    },

    // LESSON 4: Zeros of Polynomial Functions
    {
      id: 'OCT_MCQ_14',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 14,
      title: 'Real Zeros of Sum of Squares',
      prompt: '14) What is the set of real zeros of the function \\(f\\) where \\(f(x) = x^2 + 4\\)?',
      options: [
        { key: 'a', text: '\\(\\{-2\\}\\)', isCorrect: false },
        { key: 'b', text: '\\(\\{2\\}\\)', isCorrect: false },
        { key: 'c', text: '\\(\\{-2, 2\\}\\)', isCorrect: false },
        { key: 'd', text: '\\(\\emptyset\\)', isCorrect: true }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Set \\(f(x) = 0\\):</strong></div>
        <div class="sol-math">\\[x^2 + 4 = 0 \\implies x^2 = -4\\]</div>
        <div class="sol-step"><strong>Step 2: Check in \\(\\mathbb{R}\\):</strong></div>
        <div class="sol-step">There is no real number whose square is negative (\\(x^2 \\ge 0\\) for all \\(x \\in \\mathbb{R}\\)).</div>
        <div class="sol-highlight">The set of real zeros is <strong>(d) \\(\\emptyset\\)</strong></div>
      `
    },

    // LESSON 5: Rational Algebraic Functions
    {
      id: 'OCT_MCQ_15',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 15,
      title: 'Domain of Rational Function',
      prompt: '15) What is the domain of the function \\(f(x) = \\frac{x^2 - 3x}{x^2 - 4x + 3}\\)?',
      options: [
        { key: 'a', text: '\\(\\mathbb{R}\\)', isCorrect: false },
        { key: 'b', text: '\\(\\mathbb{R} - \\{0, 1, 3\\}\\)', isCorrect: false },
        { key: 'c', text: '\\(\\mathbb{R} - \\{1, 3\\}\\)', isCorrect: true },
        { key: 'd', text: '\\(\\mathbb{R} - \\{0, 3\\}\\)', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Rule for Domain:</strong> \\(\\text{Domain} = \\mathbb{R} - \\text{Zeros of Denominator}\\).</div>
        <div class="sol-step"><strong>Step 2: Factorize denominator:</strong></div>
        <div class="sol-math">\\[x^2 - 4x + 3 = (x - 1)(x - 3) = 0 \\implies x = 1 \\text{ or } x = 3\\]</div>
        <div class="sol-step"><strong>Step 3: State domain:</strong></div>
        <div class="sol-math">\\[\\text{Domain} = \\mathbb{R} - \\{1, 3\\}\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(c) \\(\\mathbb{R} - \\{1, 3\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_16',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 16,
      title: 'Domain of Rational Function (Difference of Squares)',
      prompt: '16) If the rational function is \\(n(x) = \\frac{x - 2}{x^2 - 9}\\), then the domain of the function is :',
      options: [
        { key: 'a', text: '\\(\\mathbb{R} - \\{2\\}\\)', isCorrect: false },
        { key: 'b', text: '\\(\\mathbb{R} - \\{3, -3\\}\\)', isCorrect: true },
        { key: 'c', text: '\\(\\mathbb{R} - \\{3, -3, 2\\}\\)', isCorrect: false },
        { key: 'd', text: '\\(\\mathbb{R}\\)', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Set denominator equal to zero:</strong></div>
        <div class="sol-math">\\[x^2 - 9 = 0 \\implies x^2 = 9 \\implies x = \\pm 3\\]</div>
        <div class="sol-step"><strong>Step 2: State domain:</strong></div>
        <div class="sol-math">\\[\\text{Domain} = \\mathbb{R} - \\{3, -3\\}\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(b) \\(\\mathbb{R} - \\{3, -3\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_17',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 17,
      title: 'Common Domain of Two Functions',
      prompt: '17) The common domain of the two functions \\(f_1(x) = \\frac{x - 7}{x + 1}\\) and \\(f_2(x) = \\frac{x + 3}{x(x - 7)}\\) is ........',
      options: [
        { key: 'a', text: '\\(\\mathbb{R} - \\{-1, 0, 7\\}\\)', isCorrect: true },
        { key: 'b', text: '\\(\\mathbb{R} - \\{1, 0, 7\\}\\)', isCorrect: false },
        { key: 'c', text: '\\(\\mathbb{R} - \\{-1, 7\\}\\)', isCorrect: false },
        { key: 'd', text: '\\(\\mathbb{R} - \\{-3, 7\\}\\)', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Zeros of denominator of \\(f_1\\):</strong> \\(x + 1 = 0 \\implies x = -1\\).</div>
        <div class="sol-step"><strong>Step 2: Zeros of denominator of \\(f_2\\):</strong> \\(x(x - 7) = 0 \\implies x = 0, 7\\).</div>
        <div class="sol-step"><strong>Step 3: Common Domain:</strong></div>
        <div class="sol-math">\\[\\text{Common Domain} = \\mathbb{R} - \\{-1, 0, 7\\}\\]</div>
        <div class="sol-highlight">The correct answer is <strong>(a) \\(\\mathbb{R} - \\{-1, 0, 7\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_MCQ_18',
      type: 'mcq',
      category: 'First: Choose the correct answer',
      questionNum: 18,
      title: 'Values of x for Specified Output',
      prompt: '18) If \\(f(x) = \\frac{x^2 - x - 2}{x^2 + x - 6}\\), then the set of values of \\(x\\) that make \\(f(x) = \\frac{3}{5}\\) is ........',
      options: [
        { key: 'a', text: '\\(\\emptyset\\)', isCorrect: true },
        { key: 'b', text: '\\(\\{2\\}\\)', isCorrect: false },
        { key: 'c', text: '\\(\\{-3\\}\\)', isCorrect: false },
        { key: 'd', text: '\\(\\{2, -3\\}\\)', isCorrect: false }
      ],
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Domain of \\(f\\):</strong></div>
        <div class="sol-math">\\[x^2 + x - 6 = (x + 3)(x - 2) = 0 \\implies \\text{Domain} = \\mathbb{R} - \\{-3, 2\\}\\]</div>
        <div class="sol-step"><strong>Step 2: Simplify \\(f(x)\\):</strong></div>
        <div class="sol-math">\\[f(x) = \\frac{(x - 2)(x + 1)}{(x - 2)(x + 3)} = \\frac{x + 1}{x + 3}\\]</div>
        <div class="sol-step"><strong>Step 3: Solve equation:</strong></div>
        <div class="sol-math">\\[\\frac{x + 1}{x + 3} = \\frac{3}{5} \\implies 5(x + 1) = 3(x + 3) \\implies 5x + 5 = 3x + 9 \\implies 2x = 4 \\implies x = 2\\]</div>
        <div class="sol-step"><strong>Step 4: Verify with domain:</strong> Since \\(2 \\notin \\text{Domain}\\), \\(x = 2\\) is rejected.</div>
        <div class="sol-highlight">The set of values is <strong>(a) \\(\\emptyset\\)</strong></div>
      `
    }
  ];

  // --- 30 Essay & Problem Solving Questions ---
  const essayQuestions = [
    // LESSON 1: Laws of Exponents & Power of a Power
    {
      id: 'OCT_ESSAY_1',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 1,
      title: 'Simplifying Power of a Power',
      prompt: '1) Write the expression in simplest form: \\[\\frac{(m^5)^5}{(-m^2)^6}\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Power of a power rule in numerator:</strong></div>
        <div class="sol-math">\\[(m^5)^5 = m^{5 \\times 5} = m^{25}\\]</div>
        <div class="sol-step"><strong>Step 2: Simplify denominator (even power eliminates negative sign):</strong></div>
        <div class="sol-math">\\[(-m^2)^6 = (-1)^6 \\cdot (m^2)^6 = m^{2 \\times 6} = m^{12}\\]</div>
        <div class="sol-step"><strong>Step 3: Divide like bases (subtract exponents):</strong></div>
        <div class="sol-math">\\[\\frac{m^{25}}{m^{12}} = m^{25 - 12} = m^{13}\\]</div>
        <div class="sol-highlight">The expression in simplest form is <strong>\\(m^{13}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_2',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 2,
      title: 'Product of Powers',
      prompt: '2) Find the result of \\(q^{-6} \\times (q^3)^4\\) in simplest form.',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Simplify power of a power:</strong></div>
        <div class="sol-math">\\[(q^3)^4 = q^{3 \\times 4} = q^{12}\\]</div>
        <div class="sol-step"><strong>Step 2: Multiply like bases (add exponents):</strong></div>
        <div class="sol-math">\\[q^{-6} \\times q^{12} = q^{-6 + 12} = q^6\\]</div>
        <div class="sol-highlight">The result is <strong>\\(q^6\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_3',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 3,
      title: 'Evaluation using Power Property',
      prompt: '3) If \\(5^y = 4\\), what is the value of \\(125^y\\)?',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Express 125 with base 5:</strong></div>
        <div class="sol-math">\\[125 = 5^3 \\implies 125^y = (5^3)^y = (5^y)^3\\]</div>
        <div class="sol-step"><strong>Step 2: Substitute \\(5^y = 4\\):</strong></div>
        <div class="sol-math">\\[(5^y)^3 = (4)^3 = 64\\]</div>
        <div class="sol-highlight">The value of \\(125^y\\) is <strong>64</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_4',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 4,
      title: 'Evaluating an Exponential Expression',
      prompt: '4) If \\(2^x = 5\\), find the value of the expression: \\[3 \\times 2^{x+2} - 8^x\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Expand first term using exponent rules:</strong></div>
        <div class="sol-math">\\[3 \\times 2^{x+2} = 3 \\times 2^x \\times 2^2 = 3 \\times 2^x \\times 4 = 12 \\times 2^x\\]</div>
        <div class="sol-step">Substitute \\(2^x = 5\\): \\(12 \\times 5 = 60\\).</div>
        <div class="sol-step"><strong>Step 2: Expand second term:</strong></div>
        <div class="sol-math">\\[8^x = (2^3)^x = (2^x)^3 = (5)^3 = 125\\]</div>
        <div class="sol-step"><strong>Step 3: Subtract:</strong></div>
        <div class="sol-math">\\[60 - 125 = -65\\]</div>
        <div class="sol-highlight">The value of the expression is <strong>-65</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_5',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 5,
      title: 'Simplifying and Evaluating an Exponential Fraction',
      prompt: '5) Simplify to simplest form: \\[\\frac{4^x \\times 9^{2-x}}{6^{2x}}\\] Then find the value of the result when \\(x = 1\\).',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Factorize bases into prime factors (2 and 3):</strong></div>
        <div class="sol-math">\\[4^x = (2^2)^x = 2^{2x}\\]</div>
        <div class="sol-math">\\[9^{2-x} = (3^2)^{2-x} = 3^{4 - 2x}\\]</div>
        <div class="sol-math">\\[6^{2x} = (2 \\times 3)^{2x} = 2^{2x} \\times 3^{2x}\\]</div>
        <div class="sol-step"><strong>Step 2: Simplify fraction:</strong></div>
        <div class="sol-math">\\[\\frac{2^{2x} \\times 3^{4 - 2x}}{2^{2x} \\times 3^{2x}} = \\frac{3^{4 - 2x}}{3^{2x}} = 3^{(4 - 2x) - 2x} = 3^{4 - 4x}\\]</div>
        <div class="sol-step"><strong>Step 3: Evaluate at \\(x = 1\\):</strong></div>
        <div class="sol-math">\\[3^{4 - 4(1)} = 3^0 = 1\\]</div>
        <div class="sol-highlight">Simplest form: <strong>\\(3^{4-4x}\\)</strong> | Value at \\(x = 1\\): <strong>1</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_6',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 6,
      title: 'Evaluating a Rational Power Expression',
      prompt: '6) Find the value of the expression \\[\\frac{11 \\times 6^x \\times (11)^{x-3}}{66^x}\\] when \\(x = 2\\).',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Decompose denominator:</strong></div>
        <div class="sol-math">\\[66^x = (6 \\times 11)^x = 6^x \\times 11^x\\]</div>
        <div class="sol-step"><strong>Step 2: Combine powers of 11 in numerator:</strong></div>
        <div class="sol-math">\\[11^1 \\times 11^{x-3} = 11^{1 + x - 3} = 11^{x-2}\\]</div>
        <div class="sol-step"><strong>Step 3: Simplify fraction:</strong></div>
        <div class="sol-math">\\[\\frac{6^x \\times 11^{x-2}}{6^x \\times 11^x} = 11^{(x-2) - x} = 11^{-2} = \\frac{1}{11^2} = \\frac{1}{121}\\]</div>
        <div class="sol-step">Since the expression is constant for all \\(x\\), its value at \\(x = 2\\) is \\(\\frac{1}{121}\\).</div>
        <div class="sol-highlight">The value of the expression is <strong>\\(\\frac{1}{121}\\)</strong></div>
      `
    },

    // LESSON 2: Exponential Equations
    {
      id: 'OCT_ESSAY_7',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 7,
      title: 'Solving an Exponential Equation',
      prompt: '7) Solve the following equation (for \\(x \\in \\mathbb{R}\\)): \\[3^{x-1} = 27\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Express 27 with base 3:</strong></div>
        <div class="sol-math">\\[27 = 3^3\\]</div>
        <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
        <div class="sol-math">\\[3^{x-1} = 3^3 \\implies x - 1 = 3 \\implies x = 4\\]</div>
        <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{4\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_8',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 8,
      title: 'Solving a Fraction-Base Exponential Equation',
      prompt: '8) Solve the following equation (for \\(x \\in \\mathbb{R}\\)): \\[2^{2x-1} = \\frac{1}{32}\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Express RHS with base 2:</strong></div>
        <div class="sol-math">\\[\\frac{1}{32} = \\frac{1}{2^5} = 2^{-5}\\]</div>
        <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
        <div class="sol-math">\\[2^{2x-1} = 2^{-5} \\implies 2x - 1 = -5 \\implies 2x = -4 \\implies x = -2\\]</div>
        <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{-2\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_9',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 9,
      title: 'Exponential Equation with Product of Bases',
      prompt: '9) Solve the following equation (for \\(x \\in \\mathbb{R}\\)): \\[\\frac{3^x \\times 21^x}{7^x} = 243\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Decompose \\(21^x = (3 \\times 7)^x = 3^x \\times 7^x\\):</strong></div>
        <div class="sol-math">\\[\\frac{3^x \\times 3^x \\times 7^x}{7^x} = 3^{2x}\\]</div>
        <div class="sol-step"><strong>Step 2: Express 243 with base 3:</strong></div>
        <div class="sol-math">\\[243 = 3^5 \\implies 3^{2x} = 3^5 \\implies 2x = 5 \\implies x = \\frac{5}{2} = 2.5\\]</div>
        <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{2.5\\}\\)</strong> or <strong>\\(\\{\\frac{5}{2}\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_10',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 10,
      title: 'Powers of 10 Equation',
      prompt: '10) Solve the following equation (for \\(x \\in \\mathbb{R}\\)): \\[(10)^{2x-1} = \\frac{1}{1000}\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Express RHS with base 10:</strong></div>
        <div class="sol-math">\\[\\frac{1}{1000} = \\frac{1}{10^3} = 10^{-3}\\]</div>
        <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
        <div class="sol-math">\\[(10)^{2x-1} = 10^{-3} \\implies 2x - 1 = -3 \\implies 2x = -2 \\implies x = -1\\]</div>
        <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{-1\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_11',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 11,
      title: 'Quadratic Exponent Equation',
      prompt: '11) Find in \\(\\mathbb{R}\\) the solution set of the equation: \\[5^{x^2 - 4} = 125\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Express 125 with base 5:</strong></div>
        <div class="sol-math">\\[125 = 5^3\\]</div>
        <div class="sol-step"><strong>Step 2: Equate exponents:</strong></div>
        <div class="sol-math">\\[5^{x^2 - 4} = 5^3 \\implies x^2 - 4 = 3 \\implies x^2 = 7 \\implies x = \\pm\\sqrt{7}\\]</div>
        <div class="sol-highlight">Solution Set in \\(\\mathbb{R}\\) is <strong>\\(\\{\\sqrt{7}, -\\sqrt{7}\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_12',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 12,
      title: 'Solving for Unknown Exponent m',
      prompt: '12) Find the value of \\(m\\) if: \\[3^{-2m+1} \\times 9^{2m} = \\frac{1}{27}\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Express LHS with base 3:</strong></div>
        <div class="sol-math">\\[9^{2m} = (3^2)^{2m} = 3^{4m}\\]</div>
        <div class="sol-math">\\[3^{-2m+1} \\times 3^{4m} = 3^{(-2m+1) + 4m} = 3^{2m+1}\\]</div>
        <div class="sol-step"><strong>Step 2: Express RHS with base 3:</strong></div>
        <div class="sol-math">\\[\\frac{1}{27} = \\frac{1}{3^3} = 3^{-3}\\]</div>
        <div class="sol-step"><strong>Step 3: Equate exponents:</strong></div>
        <div class="sol-math">\\[2m + 1 = -3 \\implies 2m = -4 \\implies m = -2\\]</div>
        <div class="sol-highlight">The value of \\(m\\) is <strong>-2</strong></div>
      `
    },

    // LESSON 3: Quadratic Functions & Graphs
    {
      id: 'OCT_ESSAY_13',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 13,
      title: 'Finding Minimum Value of a Quadratic Function',
      prompt: '13) Find the minimum value of the function \\(f(x) = x^2 - 3x - 4\\).',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Identify coefficients:</strong> \\(a = 1, b = -3, c = -4\\).</div>
        <div class="sol-step">Since \\(a = 1 > 0\\), the parabola opens upwards and has a minimum value at its vertex.</div>
        <div class="sol-step"><strong>Step 2: \\(x\\)-coordinate of the vertex:</strong></div>
        <div class="sol-math">\\[x_v = -\\frac{b}{2a} = -\\frac{-3}{2(1)} = \\frac{3}{2} = 1.5\\]</div>
        <div class="sol-step"><strong>Step 3: Minimum value \\(f(1.5)\\):</strong></div>
        <div class="sol-math">\\[f(1.5) = (1.5)^2 - 3(1.5) - 4 = 2.25 - 4.5 - 4 = -6.25 = -\\frac{25}{4}\\]</div>
        <div class="sol-highlight">The minimum value of the function is <strong>-6.25</strong> (or <strong>\\(-\\frac{25}{4}\\)</strong>)</div>
      `
    },
    {
      id: 'OCT_ESSAY_14',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 14,
      title: 'Coordinates of the Vertex',
      prompt: '14) If \\((m, n)\\) is the vertex of the curve for the function \\(f\\) where \\(f(x) = x^2 - 2x - 2\\), what is the value of \\(n\\)?',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Calculate \\(m\\) (\\(x\\)-coordinate of vertex):</strong></div>
        <div class="sol-math">\\[m = -\\frac{b}{2a} = -\\frac{-2}{2(1)} = 1\\]</div>
        <div class="sol-step"><strong>Step 2: Calculate \\(n\\) (\\(y\\)-coordinate of vertex):</strong></div>
        <div class="sol-math">\\[n = f(m) = f(1) = (1)^2 - 2(1) - 2 = 1 - 2 - 2 = -3\\]</div>
        <div class="sol-highlight">The value of \\(n\\) is <strong>-3</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_15',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 15,
      title: 'Determining Coefficient a from Vertex',
      prompt: '15) If \\(-4\\) is the \\(x\\)-coordinate of the vertex of the curve for the function \\(f\\), where \\(f(x) = ax^2 + 16x + 7\\), what is the value of \\(a\\)?',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Vertex \\(x\\)-coordinate formula:</strong></div>
        <div class="sol-math">\\[x_v = -\\frac{b}{2a}\\]</div>
        <div class="sol-step"><strong>Step 2: Substitute \\(b = 16\\) and \\(x_v = -4\\):</strong></div>
        <div class="sol-math">\\[-4 = -\\frac{16}{2a} = -\\frac{8}{a}\\]</div>
        <div class="sol-step"><strong>Step 3: Solve for \\(a\\):</strong></div>
        <div class="sol-math">\\[-4a = -8 \\implies a = \\frac{-8}{-4} = 2\\]</div>
        <div class="sol-highlight">The value of \\(a\\) is <strong>2</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_16',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 16,
      title: 'Graphing a Quadratic Function & Axis of Symmetry',
      prompt: '16) Graph the function \\(f\\) where \\(f(x) = (x - 1)^2 + 3\\), showing on the graph the axis of symmetry, and find the maximum or minimum value of the function.',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Identify Key Characteristics:</strong></div>
        <div class="sol-step">• Vertex form: \\(f(x) = (x - 1)^2 + 3 \\implies \\text{Vertex} = (1, 3)\\).</div>
        <div class="sol-step">• Equation of axis of symmetry: \\(x = 1\\).</div>
        <div class="sol-step">• Since \\(a = 1 > 0\\), the parabola opens upwards and has a <strong>minimum value = 3</strong>.</div>
        <div class="sol-step"><strong>Step 2: Table of Points:</strong></div>
        <div class="sol-math">
          \\[
          \\begin{array}{|c|c|c|c|c|c|}
          \\hline
          x & -1 & 0 & 1 & 2 & 3 \\\\ \\hline
          f(x) & 7 & 4 & 3 & 4 & 7 \\\\ \\hline
          \\end{array}
          \\]
        </div>
        <div class="sol-highlight">Vertex: <strong>(1, 3)</strong> | Axis of symmetry: <strong>\\(x = 1\\)</strong> | Minimum value: <strong>3</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_17',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 17,
      title: 'Graphing a Quadratic Function & Extremum',
      prompt: '17) Graph the function \\(f(x) = x^2 - 7x + 12\\), and find the maximum or minimum value of the function.',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Vertex Coordinates:</strong></div>
        <div class="sol-math">\\[x_v = -\\frac{b}{2a} = -\\frac{-7}{2(1)} = 3.5\\]</div>
        <div class="sol-math">\\[f(3.5) = (3.5)^2 - 7(3.5) + 12 = 12.25 - 24.5 + 12 = -0.25 = -\\frac{1}{4}\\]</div>
        <div class="sol-step">Since \\(a = 1 > 0\\), the curve has a <strong>minimum value = -0.25</strong>.</div>
        <div class="sol-step"><strong>Step 2: Intercepts:</strong></div>
        <div class="sol-step">• \\(x\\)-intercepts: \\(x^2 - 7x + 12 = (x - 3)(x - 4) = 0 \\implies x = 3, 4\\).</div>
        <div class="sol-step">• \\(y\\)-intercept: \\(f(0) = 12 \\implies (0, 12)\\).</div>
        <div class="sol-step"><strong>Step 3: Table of Points:</strong></div>
        <div class="sol-math">
          \\[
          \\begin{array}{|c|c|c|c|c|c|c|}
          \\hline
          x & 1 & 2 & 3 & 3.5 & 4 & 5 \\\\ \\hline
          f(x) & 6 & 2 & 0 & -0.25 & 0 & 2 \\\\ \\hline
          \\end{array}
          \\]
        </div>
        <div class="sol-highlight">Vertex: <strong>(3.5, -0.25)</strong> | Minimum value: <strong>-0.25</strong></div>
      `
    },

    // LESSON 4: Zeros of Polynomial Functions
    {
      id: 'OCT_ESSAY_18',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 18,
      title: 'Real Zeros of a Quadratic Function',
      prompt: '18) Find the set of real zeros for the function: \\[m(x) = x^2 + 1\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Set function equal to zero:</strong></div>
        <div class="sol-math">\\[x^2 + 1 = 0 \\implies x^2 = -1\\]</div>
        <div class="sol-step"><strong>Step 2: Evaluate in \\(\\mathbb{R}\\):</strong></div>
        <div class="sol-step">Since the square of any real number is non-negative (\\(x^2 \\ge 0\\)), \\(x^2 = -1\\) has no real solution.</div>
        <div class="sol-highlight">The set of real zeros is <strong>\\(Z(m) = \\emptyset\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_19',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 19,
      title: 'Real Zeros of a Linear Function',
      prompt: '19) Find the set of real zeros of the following function: \\[q(x) = -10x - 5\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Set \\(q(x) = 0\\):</strong></div>
        <div class="sol-math">\\[-10x - 5 = 0 \\implies -10x = 5 \\implies x = -\\frac{5}{10} = -\\frac{1}{2}\\]</div>
        <div class="sol-highlight">The set of real zeros is <strong>\\(Z(q) = \\{-\\frac{1}{2}\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_20',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 20,
      title: 'Real Zeros of a Trinomial',
      prompt: '20) Find the set of real zeros of the following function: \\[f(x) = x^2 - 5x - 24\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Set \\(f(x) = 0\\) and factorize:</strong></div>
        <div class="sol-math">\\[x^2 - 5x - 24 = 0 \\implies (x - 8)(x + 3) = 0\\]</div>
        <div class="sol-step"><strong>Step 2: Solve each factor:</strong></div>
        <div class="sol-math">\\[x - 8 = 0 \\implies x = 8 \\quad \\text{or} \\quad x + 3 = 0 \\implies x = -3\\]</div>
        <div class="sol-highlight">The set of real zeros is <strong>\\(Z(f) = \\{8, -3\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_21',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 21,
      title: 'Finding Constant b given a Zero of the Function',
      prompt: '21) If \\(-3\\) is one of the zeros of the function \\(f(x) = x^2 + bx - 14\\), what is the value of \\(b\\)?',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Property of a zero of a function:</strong> \\(f(-3) = 0\\).</div>
        <div class="sol-step"><strong>Step 2: Substitute \\(x = -3\\):</strong></div>
        <div class="sol-math">\\[(-3)^2 + b(-3) - 14 = 0\\]</div>
        <div class="sol-math">\\[9 - 3b - 14 = 0 \\implies -3b - 5 = 0 \\implies -3b = 5 \\implies b = -\\frac{5}{3}\\]</div>
        <div class="sol-highlight">The value of \\(b\\) is <strong>\\(-\\frac{5}{3}\\)</strong></div>
      `
    },

    // LESSON 5: Rational Algebraic Functions
    {
      id: 'OCT_ESSAY_22',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 22,
      title: 'Values where Rational Function is Undefined',
      prompt: '22) Find the set of values of \\(x\\) for which the following rational function is undefined: \\[n(x) = \\frac{x - 3}{x^2 - 5x + 6}\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Condition for undefined rational function:</strong> Denominator equals zero.</div>
        <div class="sol-math">\\[x^2 - 5x + 6 = 0\\]</div>
        <div class="sol-step"><strong>Step 2: Factorize denominator:</strong></div>
        <div class="sol-math">\\[(x - 2)(x - 3) = 0 \\implies x = 2 \\quad \\text{or} \\quad x = 3\\]</div>
        <div class="sol-highlight">The set of values of \\(x\\) is <strong>\\(\\{2, 3\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_23',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 23,
      title: 'Domain of a Rational Function and Evaluating Points',
      prompt: '23) Determine the domain of the rational function \\(n(x) = \\frac{x^2 - 25}{x - 5}\\). Then find, if possible, \\(n(5)\\) and \\(n(-5)\\).',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Find Domain:</strong></div>
        <div class="sol-math">\\[x - 5 = 0 \\implies x = 5 \\implies \\text{Domain} = \\mathbb{R} - \\{5\\}\\]</div>
        <div class="sol-step"><strong>Step 2: Evaluate \\(n(5)\\):</strong></div>
        <div class="sol-step">Since \\(5 \\notin \\text{Domain}\\), \\(n(5)\\) is <strong>undefined</strong>.</div>
        <div class="sol-step"><strong>Step 3: Evaluate \\(n(-5)\\):</strong></div>
        <div class="sol-math">\\[n(-5) = \\frac{(-5)^2 - 25}{-5 - 5} = \\frac{25 - 25}{-10} = \\frac{0}{-10} = 0\\]</div>
        <div class="sol-highlight">Domain: <strong>\\(\\mathbb{R} - \\{5\\}\\)</strong> | \\(n(5)\\) is <strong>undefined</strong> | \\(n(-5) = 0\\)</div>
      `
    },
    {
      id: 'OCT_ESSAY_24',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 24,
      title: 'Simplest Form and Domain of a Rational Function',
      prompt: '24) Write the function \\(n(x) = \\frac{x^2 + 2x - 15}{x^2 - 5x + 6}\\) in its simplest form, and state its domain.',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Factorize numerator and denominator:</strong></div>
        <div class="sol-math">\\[x^2 + 2x - 15 = (x + 5)(x - 3)\\]</div>
        <div class="sol-math">\\[x^2 - 5x + 6 = (x - 2)(x - 3)\\]</div>
        <div class="sol-step"><strong>Step 2: Determine Domain before cancellation:</strong></div>
        <div class="sol-math">\\[\\text{Domain} = \\mathbb{R} - \\{2, 3\\}\\]</div>
        <div class="sol-step"><strong>Step 3: Cancel common factor \\((x - 3)\\):</strong></div>
        <div class="sol-math">\\[n(x) = \\frac{(x + 5)(x - 3)}{(x - 2)(x - 3)} = \\frac{x + 5}{x - 2}\\]</div>
        <div class="sol-highlight">Simplest form: <strong>\\(n(x) = \\frac{x+5}{x-2}\\)</strong> | Domain: <strong>\\(\\mathbb{R} - \\{2, 3\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_25',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 25,
      title: 'Common Domain of Two Functions',
      prompt: '25) Find the common domain of the two functions: \\[f(x) = \\frac{3}{x^2 - x - 6} \\quad , \\quad g(x) = \\frac{x - 1}{x^2 - 4}\\]',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Zeros of denominator of \\(f(x)\\):</strong></div>
        <div class="sol-math">\\[x^2 - x - 6 = (x - 3)(x + 2) = 0 \\implies x = 3, -2\\]</div>
        <div class="sol-step"><strong>Step 2: Zeros of denominator of \\(g(x)\\):</strong></div>
        <div class="sol-math">\\[x^2 - 4 = (x - 2)(x + 2) = 0 \\implies x = 2, -2\\]</div>
        <div class="sol-step"><strong>Step 3: Union of denominator zeros:</strong> \\(\\{-2, 2, 3\\}\\).</div>
        <div class="sol-highlight">The common domain is <strong>\\(\\mathbb{R} - \\{-2, 2, 3\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_26',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 26,
      title: 'Finding Constant k from Common Domain',
      prompt: '26) If the common domain of the two functions \\(f_1(x) = \\frac{3}{x - k}\\) and \\(f_2(x) = \\frac{x}{x + 5}\\) is \\(\\mathbb{R} - \\{-5, 3\\}\\), find the value of \\(k\\).',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Zero of denominator of \\(f_2\\):</strong> \\(x + 5 = 0 \\implies x = -5\\).</div>
        <div class="sol-step"><strong>Step 2: Determine zero of denominator of \\(f_1\\):</strong></div>
        <div class="sol-step">Since the common excluded values are \\(\\{-5, 3\\}\\), the denominator of \\(f_1\\) must equal zero at \\(x = 3\\).</div>
        <div class="sol-math">\\[3 - k = 0 \\implies k = 3\\]</div>
        <div class="sol-highlight">The value of \\(k\\) is <strong>3</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_27',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 27,
      title: 'Proving Equality of Two Rational Functions',
      prompt: '27) If \\(f_1(x) = \\frac{x^2}{x^3 - x^2}\\) and \\(f_2(x) = \\frac{x^3 + x^2 + x}{x^4 - x}\\), prove that: \\(f_1 = f_2\\).',
      modelSolution: `
        <div class="sol-step"><strong>Conditions for Equality of Two Functions:</strong> 1) Domain(\\f_1\\) = Domain(\\f_2\\), and 2) \\(f_1(x) = f_2(x)\\) in simplest form.</div>
        <div class="sol-step"><strong>For \\(f_1(x)\\):</strong></div>
        <div class="sol-math">\\[f_1(x) = \\frac{x^2}{x^2(x - 1)}\\]</div>
        <div class="sol-step">Zeros of denominator: \\(x = 0, 1 \\implies \\text{Domain}(f_1) = \\mathbb{R} - \\{0, 1\\}\\).</div>
        <div class="sol-math">\\[f_1(x) = \\frac{1}{x - 1}\\]</div>
        <div class="sol-step"><strong>For \\(f_2(x)\\):</strong></div>
        <div class="sol-math">\\[f_2(x) = \\frac{x(x^2 + x + 1)}{x(x^3 - 1)} = \\frac{x(x^2 + x + 1)}{x(x - 1)(x^2 + x + 1)}\\]</div>
        <div class="sol-step">Zeros of denominator: \\(x = 0, 1\\) (trinomial \\(x^2 + x + 1\\) has no real zeros). \\(\\text{Domain}(f_2) = \\mathbb{R} - \\{0, 1\\}\\).</div>
        <div class="sol-math">\\[f_2(x) = \\frac{1}{x - 1}\\]</div>
        <div class="sol-step"><strong>Conclusion:</strong> Since \\(\\text{Domain}(f_1) = \\text{Domain}(f_2) = \\mathbb{R} - \\{0, 1\\}\\) and \\(f_1(x) = f_2(x) = \\frac{1}{x - 1}\\), therefore \\(f_1 = f_2\\).</div>
        <div class="sol-highlight">Proved that <strong>\\(f_1 = f_2\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_28',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 28,
      title: 'Proving Equality of Functions on Common Domain',
      prompt: '28) If \\(f_1(x) = \\frac{x^2 - 4}{x^2 - 2x}\\) and \\(f_2(x) = \\frac{x + 2}{x}\\), prove that \\(f_1(x) = f_2(x)\\) for all \\(x\\) in their common domain.',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Simplify \\(f_1(x)\\):</strong></div>
        <div class="sol-math">\\[f_1(x) = \\frac{(x - 2)(x + 2)}{x(x - 2)}\\]</div>
        <div class="sol-step">Zeros of denominator: \\(x = 0, 2 \\implies \\text{Domain}(f_1) = \\mathbb{R} - \\{0, 2\\}\\).</div>
        <div class="sol-math">\\[f_1(x) = \\frac{x + 2}{x}\\]</div>
        <div class="sol-step"><strong>Step 2: Analyze \\(f_2(x)\\):</strong></div>
        <div class="sol-step">\\(f_2(x) = \\frac{x + 2}{x}\\) is already in simplest form; \\(\\text{Domain}(f_2) = \\mathbb{R} - \\{0\\}\\).</div>
        <div class="sol-step"><strong>Step 3: Common Domain:</strong></div>
        <div class="sol-math">\\[\\text{Common Domain} = \\mathbb{R} - \\{0, 2\\}\\]</div>
        <div class="sol-step">For every \\(x \\in \\mathbb{R} - \\{0, 2\\}\\), \\(f_1(x) = f_2(x) = \\frac{x + 2}{x}\\).</div>
        <div class="sol-highlight">Proved that <strong>\\(f_1(x) = f_2(x)\\)</strong> for all \\(x\\) in common domain <strong>\\(\\mathbb{R} - \\{0, 2\\}\\)</strong></div>
      `
    },
    {
      id: 'OCT_ESSAY_29',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 29,
      title: 'Checking Equivalence of Two Algebraic Fractions',
      prompt: '29) Are the two functions \\(f_1(x) = \\frac{x^2}{x^3 - x^2}\\) and \\(f_2(x) = \\frac{x^2 + x + 1}{x^3 - 1}\\) equivalent fractions? Explain.',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Simplify \\(f_1(x)\\):</strong></div>
        <div class="sol-math">\\[f_1(x) = \\frac{x^2}{x^2(x - 1)} = \\frac{1}{x - 1}, \\quad \\text{Domain}(f_1) = \\mathbb{R} - \\{0, 1\\}\\]</div>
        <div class="sol-step"><strong>Step 2: Simplify \\(f_2(x)\\):</strong></div>
        <div class="sol-math">\\[f_2(x) = \\frac{x^2 + x + 1}{(x - 1)(x^2 + x + 1)} = \\frac{1}{x - 1}, \\quad \\text{Domain}(f_2) = \\mathbb{R} - \\{1\\}\\]</div>
        <div class="sol-step"><strong>Step 3: Comparison:</strong> Both functions reduce to the identical fraction \\(\\frac{1}{x - 1}\\).</div>
        <div class="sol-highlight"><strong>Yes</strong>, they are equivalent fractions for all \\(x\\) in their common domain <strong>\\(\\mathbb{R} - \\{0, 1\\}\\)</strong>.</div>
      `
    },
    {
      id: 'OCT_ESSAY_30',
      type: 'problem',
      category: 'Second: Answer the following questions',
      questionNum: 30,
      title: 'Proving Equality and Determining Common Domain',
      prompt: '30) If \\(f_1(x) = \\frac{x}{x^2 - 2x}\\) and \\(f_2(x) = \\frac{x^2 + 2x + 4}{x^3 - 8}\\), prove that \\(f_1(x) = f_2(x)\\) for every \\(x\\) in their common domain, then determine this domain.',
      modelSolution: `
        <div class="sol-step"><strong>Step 1: Simplify \\(f_1(x)\\):</strong></div>
        <div class="sol-math">\\[f_1(x) = \\frac{x}{x(x - 2)} = \\frac{1}{x - 2}, \\quad \\text{Domain}(f_1) = \\mathbb{R} - \\{0, 2\\}\\]</div>
        <div class="sol-step"><strong>Step 2: Simplify \\(f_2(x)\\):</strong></div>
        <div class="sol-math">\\[f_2(x) = \\frac{x^2 + 2x + 4}{(x - 2)(x^2 + 2x + 4)} = \\frac{1}{x - 2}, \\quad \\text{Domain}(f_2) = \\mathbb{R} - \\{2\\}\\]</div>
        <div class="sol-step"><strong>Step 3: Common Domain:</strong></div>
        <div class="sol-math">\\[\\text{Common Domain} = \\mathbb{R} - \\{0, 2\\}\\]</div>
        <div class="sol-step">For every \\(x \\in \\mathbb{R} - \\{0, 2\\}\\), \\(f_1(x) = f_2(x) = \\frac{1}{x - 2}\\).</div>
        <div class="sol-highlight">Common domain is <strong>\\(\\mathbb{R} - \\{0, 2\\}\\)</strong> and \\(f_1(x) = f_2(x)\\) for all \\(x\\) in it.</div>
      `
    }
  ];

  // Group A combines All 48 questions:
  // Q1 to Q18 are MCQs; Q19 to Q48 are Essay questions!
  const groupAQuestions = [
    ...mcqQuestions.map((q, idx) => ({ ...q, questionNum: idx + 1 })),
    ...essayQuestions.map((q, idx) => ({ ...q, questionNum: idx + 19 }))
  ];

  // Group B has 18 MCQs:
  const groupBQuestions = mcqQuestions.map((q, idx) => ({ ...q, questionNum: idx + 1 }));

  // Group C has 30 Essay questions:
  const groupCQuestions = essayQuestions.map((q, idx) => ({ ...q, questionNum: idx + 1 }));

  // Register in WEEKS_DATA
  const octRevisionData = {
    id: 'prep3_october_revision',
    title: 'Prep 3 • October Revision (School Book & Assessments)',
    stageName: 'Prep 3 (Grade 9) • October Monthly Revision',
    groupA: {
      id: 'groupA',
      title: 'Group (A)',
      badgeName: 'Group (A) • Full Revision (Q1–Q18: Choose • Q19–Q48: Problems)',
      questions: groupAQuestions
    },
    groupB: {
      id: 'groupB',
      title: 'Group (B)',
      badgeName: 'Group (B) • Section 1: Choose the Correct Answer (18 MCQs)',
      questions: groupBQuestions
    },
    groupC: {
      id: 'groupC',
      title: 'Group (C)',
      badgeName: 'Group (C) • Section 2: Answer the Following Questions (30 Problems)',
      questions: groupCQuestions
    }
  };

  targetData.prep3_october_revision = octRevisionData;
  if (typeof WEEKS_DATA !== 'undefined') {
    WEEKS_DATA.prep3_october_revision = octRevisionData;
  }
  if (typeof window !== 'undefined') {
    window.WEEKS_DATA = window.WEEKS_DATA || targetData;
    window.WEEKS_DATA.prep3_october_revision = octRevisionData;
  }

  console.log('✅ Prep 3 October Monthly Revision loaded into WEEKS_DATA (48 Questions)');
})();
