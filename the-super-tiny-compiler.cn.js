'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 今天我们一起写一个编译器. 但是却不同于任何编辑器 
 * 这个编译器小到让人尖叫，使用起来也很方便! 
 * 它很小，小到一种这样的程度：如果你删除文件中所有的评论，这个文件仅仅只有200行左右的代码
 *
 * 我们将把lisp语言的函数调用编译成C语言的函数调用
 *
 * 如果你对一种或者两种语言都不熟悉，我将先给你做个简单快速的介绍
 *
 * 如果我们有两个函数 `add` 和 `subtract`， 他们应该会写成这样
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 很简单明了吧？
 *
 * 很好, 这正是我们即将要进行编译的. 
 * 虽然它这不是一个完整的LISP或者C的语法，但它足已说明现代编译器的主要部分。
 */

/**
 * 大多数编译器都可以分解为3个主要阶段: 解析, 转换和代码生成器
 *
 * 1. *解析* 是说将原始代码转换成一个更抽象的代码。
 *
 * 2. *转换* 将这些抽象代码处理成编译器想要的样子。
 *
 * 3. *代码生成器* 将转换后的代码转换成新的代码。
 */

/**
 * 转换
 * -------
 *
 * 经典转换可以分解为两个阶段: 词法分析和语法分析
 *
 * 1. *词法分析* 通过分词器将原始代码分解成一个个的tokens。
 *    Token是一个由一个个的单独的语法块组成的对象数组，他们可以是数字numbers、标签labels、
 *    标点符号punctuation，操作符operators，等等。
 *
 * 2. *语法分析* 获取Tokens并将他们格式化为语法描述单元和关联关系.
 *    这个常被称作中间码或者抽象语法树
 *
 *    抽象语法树简称AST是一个深度嵌套对象
 *    它是一种可以方便的组织大量信息的代码组织方式，传递给我们很多信息
 *
 * 例如下面的语法:
 *
 *   (add 2 (subtract 4 2))
 *
 * Tokens 看起来是这样的:
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * AST看起来是这样子的:
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * 转换
 * --------------
 *
 * 编译器的下一个阶段就是转换. 再强调一下, 这一步仅仅是从上一步获取AST，并对他做一些修改
 * 它可以将AST处理成同语言或者转成另一种全新语言
 * 
 * 让我们来看看我们怎么转换一个AST。
 *
 * 你可能注意到，我们的AST的内部元素看起来都非常相似。
 * 他们都有一个type属性
 * 每个拥有type属性的对象我们都可以把他们叫做一个AST节点
 * 每一个节点都定义了一些属性来描述树的某一个单独的部分。
 *
 * 我们可以有一个数值节点
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * 也可以有一个节点来描述表达式调用
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * 当我们转换AST的时候
 * 我们可以通过新增/移除/替换节点的属性处理节点
 * 我们可以新增节点、删除节点或者丢掉整个旧的AST
 * 然后创造一个基于这个语法树的全新的AST
 *
 * 由于我们的目标是一个新的语言
 * 我们将关注在创建一个特定语言的全新AST
 *
 * 遍历
 * ---------
 *
 * 为了能够访问所有的这些节点
 * 我们需要能够遍历他们
 * 这个遍历程序访问每一个节点通过深度优先的方式(depth-first)。
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * 所以针对上面的AST我们应该是经过下面步骤
 *
 *   1. Program - 从AST的顶层开始
 *   2. CallExpression (add) - 访问程序主体的第一个元素
 *   3. NumberLiteral (2) - 访问CallExpression's params的第一个元素
 *   4. CallExpression (subtract) - 访问CallExpression's params的第二个元素
 *   5. NumberLiteral (4) - 访问CallExpression's params的第一个元素
 *   6. NumberLiteral (2) - 访问CallExpression's params的第二个元素
 *
 * 如果我们是想直接处理这个AST
 * 而不是创建一个独立的AST
 * 我们在这儿可能会罗列出所有种类的抽象结构。
 * 但其实以上这些步骤，对于仅仅访问树的每一个节点就够了。
 *
 * 我使用访问这个词的原因是
 * 这是一种表示元素操作的一种模式
 *
 * 访问器
 * --------
 *
 * 最初的想法是我们创建一个访问器对象
 * 它拥有一些方法可以接受不同的节点类型
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 当我们遍历AST的时候
 * 不管什么时候我们进入一个匹配类型的节点的时候
 * 我们就会调用访问器提供的方法
 *
 * 我们会传入一个node和parent node参数到访问器函数中
 * 以提高易用性
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * 然而，也存在调用exit的时候
 * 想象我们之前的树结构
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 当遍历器进行遍历时，会到达遍历分支的底部。
 * 
 * 当我们遍历完树的一个遍历分支后，就会推出这个遍历分支
 * 所以
 * 所以，顺着树结构往下走，我们称之为进入节点
 * 逆着书结构往上走，我们称之为退出节点
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * 为了支持它，最后的访问器应该是看起来这样子的
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * 代码生成器
 * ---------------
 *
 * 编译器最后的步骤就是代码生成器了。
 * 有时候编译器会做一些与转换重叠的事情
 * 但是编译器最核心的部分就是获取AST和string-ify code
 * 代码生成器有好几种不能的工作方式
 * 有的编译器会重新使用早期的tokens
 * 其他的会创建一个单独的代码处理器便于我们更线性的打印代码
 * 但是我可以说，大部分的编译器都会使用我们刚才创建的方式来做
 * 
 * 实际上我们的代码生成器知道怎么打印所有不同的AST中的节点类型
 * 它将递归调用自身来打印嵌套节点，直到所有的东西都被打印成一长串代码
 * 
 */

/**
 * 就这些！
 * 这就是一个编译器的所有的不同部分了
 *
 * 不是说每一个编译器都跟我描述的一样
 * 编译器有不同的目标
 * 他们可能需要比我描述的更多的步骤
 *
 * 但是现在你应该对大多数编译器有一个总体的了解
 * 
 * 我都解释清楚了，你准备好了写一个自己的编译器了吗
 * 
 * 开个玩笑，我还在这儿帮你呢 :P
 * 
 * 那么我们一起开始吧
 *
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!标记器
 * ============================================================================
 */

/**
 * 我们使用标记器来开启第一阶段的解析，分析词法之旅。
 *
 * 我们只需要获取到代码字符串，然后将其分解为一系列的标记。
 * 
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// 下面的标记器函数中首先要接收一段字符串代码，然后我们要做两件事
// 
function tokenizer(input) {

  // 申明一个名为current的变量，来记录代码代码中的位置。
  let current = 0;

  // 申明一个名为tokens的数组，来接收，采集标记
  let tokens = [];

  // 接下来我们要创建一个while循环，在这个循环中，我们将不停地累加current变量，
  // 
  // 我们不停做变量数值累加的原因是我们的标记的长度是不确定的，它可以是任意长度，所以我们可能想要在一个循环体中多次累加变量current。
  while (current < input.length) {

    //接下来我们在input中储存current这个属性
    let char = input[current];

    // 我们想要查找的第一个就是一个左括号。这个左括号之后会被用作函数表达式，但是现在我们关心的仅仅是字符
    //
    // 检查一下是否有左括号
    if (char === '(') {

      // 如果有这个符号的话，我们就将这个新的标记的type设置为'paren'，value设置为一个左括号，推入tokens这个数组中
      // 
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // 然后我们让current自加1
      current++;

      // 使用continue，进入循环的下一个环节
      continue;
    }

    // 接下来，我们要去寻找右括号，按照上面一样的步骤寻找： 寻找右括号，往tokens数组中插入新的标记，使curent自增，然后继续进入下一个环节
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // 现在，我们要查找的是空格。这个查找很有趣，因为我们关心的是那些分隔字符的空格，但是对于存储标记来说，空格却并不是那么重要。
    //
    // 所以在这里我嗯仅仅需要监测空格是否存在，如果有空格的话，我们只需要继续往下查找
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 标记的下一个类型就数值。这个类型与我们之前见过的并不一样，因为这个数值可以是任意数量的字符组成，我们希望捕获整个字符序列，作为一个标记存储
    //   (add 123 456)
    //        ^^^ ^^^
    //        Only two separate tokens
    //
    // 所以当我们在一段字符序列中发现第一个数字时，就可以开启下面的步骤
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // 申明一个空字符串变量，我们之后需要往这个变量中推入字符
      let value = '';

    // 接下来我们需要遍历字符序列中的每个字符，直到遇到不是数字的字符，将数值类型的自如推入之前申明的value变量中，current自增，继续往下走
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 然后，将type为number的标记推入tokens这个数组中
      tokens.push({ type: 'number', value });

      // 继续
      continue;
    }
    //   我们也需要在语言中实现对字符串的处理 ，也就是增加对用双引号引起的文本的处理
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens
    //
    // 首先查找左双引号
    if (char === '"') {
      // 申明一个名为value的变量，
      let value = '';

      // 在创建新标记中，我们将跳过这个左双引号
      char = input[++current];

      // 然后我们继续遍历每一个字符，直到遇到下一个双引号
        while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // 跳过右双引号
      char = input[++current];

      // 将type为string的标记推入tokens这个数组
      tokens.push({ type: 'string', value });

      continue;
    }

    // 最后一中类型的标记为“name",这种标记由字母序列组成，在lisp 语法中这种标记就是函数的名称
    //   (add 2 4)
    //    ^^^
    //    Name token
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // 循环整个字母序列将其推入变量value中
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 将type为name的标记推进tokens数组，继续
      tokens.push({ type: 'name', value });

      continue;
    }

    // 最后，如果我们没有匹配到任何类型，就抛出错误，完全退出
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // 然后，在tokenizer函数的结尾，我们将整个tokens数组return出去
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!解析器
 * ============================================================================
 */

/**
 * 对于解析器，我们要做的就是获取到整个tokens数组，然后将整个数组解析为一个抽象语法树
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// 所以，定义一个parser函数，接收tokens数组参数
function parser(tokens) {

  // 在这里我们依然要申明一个current变量，作为标记导航
  let current = 0;

  //但是这次，我们不使用while循环，而是采用递归的方式，所以我们定义了一个walk函数
  function walk() {

    // 在walk函数中，我们从curent的初始值开始
    let token = tokens[current];

    //   我们将把美中不同类型的标记分成不同代码路径，我们从number类型开始
    // 
    if (token.type === 'number') {

      // 如果其中有number的类型，就让current自增
      current++;

      // 我们return出一个新的名为NumberLiteral的抽象语法树的节点，将它的值设置为标记的值
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // 如果我们有string类型的，做法参照数值number类型，创建一个StringLiteral的节点
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // 接下来寻找函数调用，当我们遇到左括号，我们就可以进行下面的操作
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      //累加current，跳过左括号，因为在抽象语法书中，我们并不关心这个字符
      token = tokens[++current];

      //创建一个type为CallExpression的基本节点，将其中name设置为当前标记的value值，因为左括号后的下一个标记是函数的名字
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // current自增，再一次跳过函数名称的标记
      token = tokens[++current];

      // 现在，我们想要遍历每一个标记，这些标记将成为CallExpression的参数，直到遇到右括号为止
      // 现在，在这里我们就要使用递归函数了。我们将要使用递归来解决接续深层嵌套节点的问题
      //  为了做进一步的解释，我们就将lisp代码举个例子。你可以看到add函数的参数是一个数字和一个嵌套的拥有自己的数字类型参数的CallExpression
      //   (add 2 (subtract 4 2))
      //
      // 你回看到在我们的tokens数组中，我们有多个右括号
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //   ]
      //
      // 我们将依赖嵌套的walk函数来实现curent变量的累加,遍历经过每一个嵌套的CallExpression

      // 所以我们创建一个while循环，直到循环到type为paren，value为右括号的标记，就停止
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // 我们将调用walk函数，这个函数将返回一个node ,然后我们将它推入node.params中
        node.params.push(walk());
        token = tokens[current];
      }

      // 最后，最后一次累加current变量，跳过右扩哈
      current++;

      // return 出node.
      return node;
    }

    // 如果代码执行到这里我们都没有识别出标记的类型，就抛出错误
    throw new TypeError(token.type);
  }

  //吸纳在，我们将创建语法树，这个抽象语法树有一个type为Program的根节点
  let ast = {
    type: 'Program',
    body: [],
  };

  //我们将再次嗲耦哦那个walk函数，将节点推入ast.body中
  //
  // 我们在循环中这样做的原因是，我们程序中的函数调用并不是嵌套函数，它的后面可能还有另一个函数调用，
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // 在解析器的最后，我们要返回AST
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!遍历器
 * ============================================================================
 */

/**
 * 现在我们已经得到了抽象语法树，使用遍历器我们就可以访问不同的节点了。此时我们需要具备的能力是： 不管何时我们遇到类型匹配的即诶点，都能够调用访问器上的方法
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// 定义一个traverser函数，接收AST和访问器作为参数。在这个函数内部，我们定义两个函数
function traverser(ast, visitor) {

  // `traverseArray`函数可以遍历数组，并且调用 traverseNode函数
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode`函数接收node和parent两个参数 ，所以这个函数会将这两个参数传递给访问器的方法中
  function traverseNode(node, parent) {

    // 首先，我们需要使用匹配到的type，查询访问起上时候存在与该type匹配的方法
    let methods = visitor[node.type];

   // 如果该类型节点上有enter方法，就嗲耦哦那个这个方法，将node和parent传给这个方法
    if (methods && methods.enter) {
      parent
      methods.enter(node, parent);
    }

    // 接下来我们就要依据当前的节点类型进行拆分
    switch (node.type) {

     // 我们从顶层的Program开始。因为Program节点有一个名为body的属性，这个属性中包含一组节点，所以我们调用traverseArray函数来遍历整个body
      case 'Program':
        traverseArray(node.body, node);
        break;

      // 接下来我们用同样的方式处理CallExpression，然后遍历它的参数
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      //遇到NumberLiteral和StringLiteral这两个类型时，并没有子节点可以访问，所以，我们跳过就可以
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // 同同样地，如果我们没有识别出任何一种节点类型，就抛出一个错误
      default:
        throw new TypeError(node.type);
    }

    // 如果当前类型节点上有exit方法，我们就要调用这个函数，将node和parent作为参数传递给它。
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // 最后，我们通过调用traverseNode函数来开启遍历。调用traverseNode函数要传递ast,但是第二个参数传递为null,因为ast的顶层是没有父级节点的
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!转换器
 * ============================================================================
 */

/**
 * 我们的转换器要做的工作就是获取到我们创建的AST，然后将其和访问器传给traverser函数，然后创建一个新的AST
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// 所以我们需要一个transformer函数来接收lisp的AST
function transformer(ast) {

  // 我们创建一个名为newAst的对象，这个对象类似于之前的Ast，他们都有一个Program节点
  let newAst = {
    type: 'Program',
    body: [],
  };

  //接下来，我要作点弊，制造一些hack。在父节点上，命名一个属性名为context的属性，以后我们要往这个父节点的context属性中推入节点。正常情况下，你可能会有更好地抽象节点的方法，但是，就目前我们的目的来看，这个方式会使事情简化
  ast._context = newAst.body;

  // 调用traverser函数，将ast和访问器传入
  traverser(ast, {

    // 第一个访问器方法接收NumberLiteral
    NumberLiteral: {
      // 在enter方法中访问
      enter(node, parent) {
        // 创建一个新的节点，也命名为NumberLiteral，将这个新即诶单推入父节点的context中
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // 接下来是, `CallExpression`.
    CallExpression: {
      enter(node, parent) {

        // 首先创建一个新的节点CallExpression，这个节点有一些嵌套的Identifier
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

       // 接下来我们要在原来的CallExpression节点上定义一个新的context属性，这个属性的值参照了expression.arguments,所以我们需要往expression.arguments中推入参数
        node._context = expression.arguments;

        // 然后我们需要判断父节点是否是CallExpression，如果不是的话，就执行下面的操作
        if (parent.type !== 'CallExpression') {

          // 使用ExpressionStatement包装CallExpression。这样做的原因是，在js中，顶层的CallExpression其实是表达式
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // 最后将CallExpression（可能被我们包装过）推入到父节点的context中
        parent._context.push(expression);
      },
    }
  });

  // 在transformer函数的结尾，我们要返回刚刚创建的新的抽象语法树
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!代码合成器
 * ============================================================================
 */

/**
 *现在进入最后一个阶段： 代码合成器
 *
 * 代码合成器将递归调用自己打印出抽象语法树上的所有节点，突然后形成一个巨大的字符串
 */

function codeGenerator(node) {

  // 依据node的type值，将字符拆分
  switch (node.type) {

    // 如果发现Program即诶单，就遍历body中的所有节点，让所有节点都经过代码生成器，之后将其组装为新的语句
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // 对于ExpressionStatement，我们要在嵌套表达式上调用codeGenerator，然后在后面加上分号
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...because we like to code the *correct* way)
      );

    // 对于CallExpression ，我们在codeGenerator函数中传入node.callee，添加一个左括号，遍历整个形参数组中每一个节点，每个节点都调用codeGenerator，之后将他们用逗号连接，最后添加右括号
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // 对于 `Identifier` 我们只需要返回node的name.
    case 'Identifier':
      return node.name;

    // 对于`NumberLiteral我们只需要返回node的value.
    case 'NumberLiteral':
      return node.value;

    // 对于`StringLiteral` 我们在node的value的左右添加引号，就可以.
    case 'StringLiteral':
      return '"' + node.value + '"';

    //如果没哟识别出任何节点，就抛出错误
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!编译器
 * ============================================================================
 */

/**
 * 最后，申明一个compiler函数。在这个函数中，我们就可以将所有流程都贯穿在一起
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // 返回结果
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// Now I'm just exporting everything...
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
