const fs = require('fs');

// We will construct the 48 questions in English
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
      <div class="sol-step"><strong>Step 1: Distribute exponent to each factor:</strong></div>
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
      <div class="sol-step"><strong>Step 1: Express base 9 as power of 3:</strong></div>
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
      <div class="sol-step">Since the bases are not equal (\\(5 \\ne 7\\)) and the exponents are equal, the exponent must be zero.</div>
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
      <div class="sol-step"><strong>Step 1: Direction of opening:</strong></div>
      <div class="sol-step">Coefficient of \\(x^2\\) is \\(+1 > 0\\), so the parabola opens upwards.</div>
      <div class="sol-step"><strong>Step 2: Vertex coordinates:</strong></div>
      <div class="sol-math">\\[x_v = 0 \\implies f(0) = -1 \\implies \\text{Vertex} = (0, -1)\\]</div>
      <div class="sol-step"><strong>Step 3: \\(x\\)-intercepts:</strong></div>
      <div class="sol-math">\\[x^2 - 1 = 0 \\implies x = \\pm 1 \\implies (-1, 0) \\text{ and } (1, 0)\\]</div>
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

console.log('MCQ count:', mcqQuestions.length);
