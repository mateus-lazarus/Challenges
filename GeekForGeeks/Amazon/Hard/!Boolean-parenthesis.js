// https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/


// Approach 1

// Returns count of all possible
    // parenthesizations that lead to
    // result true for a boolean
    // expression with symbols like true
    // and false and operators like &, |
    // and ^ filled between symbols
    function countParenth(symb, oper, n)
    {
        let F = new Array(n);
        let T = new Array(n);
         
        for (let i = 0; i < n; i++) 
        {
            F[i] = new Array(n);
            T[i] = new Array(n);
            for(let j = 0; j < n; j++)
            {
                F[i][j] = 0;
                T[i][j] = 0;
            }
        }
  
        // Fill diagonal entries first
        // All diagonal entries in T[i][i]
        // are 1 if symbol[i] is T (true).
        // Similarly, all F[i][i] entries
        // are 1 if symbol[i] is F (False)
        for (let i = 0; i < n; i++) {
            F[i][i] = (symb[i] == 'F') ? 1 : 0;
            T[i][i] = (symb[i] == 'T') ? 1 : 0;
        }
  
        // Now fill T[i][i+1], T[i][i+2],
        // T[i][i+3]... in order And F[i][i+1],
        // F[i][i+2], F[i][i+3]... in order
        for (let gap = 1; gap < n; ++gap)
        {
            for (let i = 0,
                 j = gap; j < n;
                 ++i, ++j)
            {
                T[i][j] = F[i][j] = 0;
                for (let g = 0; g < gap; g++)
                  
                {
                    // Find place of parenthesization
                    // using current value of gap
                    let k = i + g;
  
                    // Store Total[i][k]
                    // and Total[k+1][j]
                    let tik = T[i][k]
                      + F[i][k];
                    let tkj = T[k + 1][j]
                      + F[k + 1][j];
  
                    // Follow the recursive formulas
                    // according to the current operator
                    if (oper[k] == '&')
                    {
                        T[i][j] += T[i][k]
                                * T[k + 1][j];
                        F[i][j]
                            += (tik * tkj
                                - T[i][k]
                                * T[k + 1][j]);
                    }
                    if (oper[k] == '|')
                    {
                        F[i][j] += F[i][k]
                                * F[k + 1][j];
                        T[i][j]
                            += (tik * tkj
                                - F[i][k]
                                * F[k + 1][j]);
                    }
                    if (oper[k] == '^')
                    {
                        T[i][j] += F[i][k]
                               * T[k + 1][j]
                                   + T[i][k]
                                   * F[k + 1][j];
                        F[i][j] += T[i][k]
                               * T[k + 1][j]
                                   + F[i][k]
                               * F[k + 1][j];
                    }
                }
            }
        }
        return T[0][n - 1];
    }
     
    let symbols = "TTFT".split('');
    let operators = "|&^".split('');
    let n = symbols.length;
 
    // There are 4 ways
    // ((T|T)&(F^T)), (T|(T&(F^T))),
    // (((T|T)&F)^T) and (T|((T&F)^T))
    document.write(countParenth(symbols, operators, n));
     
    // This code is contributed by mukesh07.


















// Approach 2

 
function countWays(N, S)
{
    let dp = new Array(N + 1);
    for(let i = 0; i < N + 1; i++)
    {
        dp[i] = new Array(N+1);
        for(let j = 0; j < N + 1;j++)
        {
            dp[i][j] = new Array(2);
            for(let k = 0; k < 2; k++)
                dp[i][j][k] = -1;
        }
    }
  
         
        return parenthesis_count(S, 0, N - 1, 1, dp);
}
 
function parenthesis_count(str, i, j, isTrue, dp)
{
    if (i > j)
            return 0;
  
        if (i == j)
        {
            if (isTrue == 1)
            {
                return (str[i] == 'T') ? 1 : 0;
            }
            else
            {
                return (str[i] == 'F') ? 1 : 0;
            }
        }
  
        if (dp[i][j][isTrue] != -1)
            return dp[i][j][isTrue];
  
        let temp_ans = 0;
  
        let leftTrue, rightTrue, leftFalse, rightFalse;
  
        for (let k = i + 1; k <= j - 1; k = k + 2)
        {
  
            if (dp[i][k - 1][1] != -1)
                leftTrue = dp[i][k - 1][1];
            else
            {
                // Count number of True in left Partition
                leftTrue = parenthesis_count(str, i, k - 1,
                                             1, dp);
            }
            if (dp[i][k - 1][0] != -1)
                leftFalse = dp[i][k - 1][0];
            else
            {
                
                // Count number of False in left Partition
                leftFalse = parenthesis_count(str, i, k - 1,
                                              0, dp);
            }
            if (dp[k + 1][j][1] != -1)
                rightTrue = dp[k + 1][j][1];
            else
            {
                
                // Count number of True in right Partition
                rightTrue = parenthesis_count(str, k + 1, j,
                                              1, dp);
            }
            if (dp[k + 1][j][0] != -1)
                rightFalse = dp[k + 1][j][0];
            else
            {
                
                // Count number of False in right Partition
                rightFalse = parenthesis_count(str, k + 1,
                                               j, 0, dp);
            }
  
            // Evaluate AND operation
            if (str[k] == '&')
            {
                if (isTrue == 1)
                {
                    temp_ans
                        = temp_ans + leftTrue * rightTrue;
                }
                else
                {
                    temp_ans = temp_ans
                               + leftTrue * rightFalse
                               + leftFalse * rightTrue
                               + leftFalse * rightFalse;
                }
            }
            // Evaluate OR operation
            else if (str[k] == '|')
            {
                if (isTrue == 1)
                {
                    temp_ans = temp_ans
                               + leftTrue * rightTrue
                               + leftTrue * rightFalse
                               + leftFalse * rightTrue;
                }
                else
                {
                    temp_ans
                        = temp_ans + leftFalse * rightFalse;
                }
            }
            
            // Evaluate XOR operation
            else if (str[k] == '^')
            {
                if (isTrue == 1)
                {
                    temp_ans = temp_ans
                               + leftTrue * rightFalse
                               + leftFalse * rightTrue;
                }
                else
                {
                    temp_ans = temp_ans
                               + leftTrue * rightTrue
                               + leftFalse * rightFalse;
                }
            }
            dp[i][j][isTrue] = temp_ans;
        }
        return temp_ans;
}
 
 // Driver code
let symbols = "TTFT";
let operators = "|&^";
let S = [];
let j = 0;
 
for (let i = 0; i < symbols.length; i++)
{
    S.push(symbols[i]);
    if (j < operators.length)
        S.push(operators[j++]);
}
 
// We obtain the string  T|T&F^T
let N = S.length;
 
// There are 4 ways
// ((T|T)&(F^T)), (T|(T&(F^T))), (((T|T)&F)^T) and
// (T|((T&F)^T))
document.write(countWays(N, S.join("")));
 
// This code is contributed by avanitrachhadiya2155



