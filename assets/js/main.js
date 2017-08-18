var map1 = [" * * * * * * * * * * * * * * * * * * * * ",
    " * *           * * *             * *   * ",
    " * *             W                 *   * ",
    " *                           *     *   * ",
    " *         *                       *   * ",
    " *   * * * *             *         *   * ",
    " *     *     * *       *   *       *   * ",
    " *   * I o   * *         *   * * * *   * ",
    " *     *     * *   * *  **           I * ",
    " *   *          *        *         * * * ",
    " *           * ***   *   *     *   * * * ",
    " *       *      *        * *       * * * ",
    " *     * *             ***         * * * ",
    " * *   *           *     *         *   * ",
    " *     *   *      *      *     *       * ",
    " * *        *     *      *         *   * ",
    " * * * * * * * * * * * * * * * * * * * * "];

var  map2=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * *                                 *             * * * * ",
    " * *   *                             *       *       * * * ",
    " *   *   *            *              *     * *     *     * ",
    " *         *           * *           * * *       *   *   * ",
    " *     * *       *           *       *   *     *     *   * ",
    " *   *                       *       *   *   *       *   * ",
    " * *                             *   *   I          W* * * ",
    " * *              **     * *                             * ",
    " * *             *     I           *                     * ",
    " *               *   *         *                     *   * ",
    " *   *   *     *       *   *                             * ",
    " *     *                             *                   * ",
    " *       * *        *    *   *     * * *           *     * ",
    " *       * *                         *     *       *     * ",
    " * *             *       *       *                       * ",
    " *       *     *       *   * *     *     *   * *         * ",
    " *     *           *  o*   * *   *   *       * * *       * ",
    " * * *      *          * *         *   *             * * * ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

var map3=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * * * * * * * * * * *                                           ",
    " *       *  *  *       * *                                W*     ",
    " *               *     * * *           *                   I     ",
    " * *       *               * *                                   ",
    " *    *    * *   I           * *         *   *                   ",
    " *                   ****      * * * *   *     *         *       ",
    " *         *                 *           *   *                   ",
    " *       *                 *   *                                 ",
    " *         *   *         *       *   *                           ",
    " *             *         *                                       ",
    " * *                ** *                                   *     ",
    " *                **         * *                                 ",
    " *  **   *   *  **                     * *                 * *   ",
    " * *   *   *   *       * *                   * *           * *   ",
    " *                                         *   *                 ",
    " *               *     *               ***   * *                 ",
    " *             *               *                                 ",
    " *                       *         * *                           ",
    " *o  *       *           *       * *                           * ",
    " * * *           *                                         *     ",
    " * * * *                                  *                *     ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

var map4= ["                                                                 ",
    " *   o       * **  ** *                                  *****    ",
    "    *                                                        *    ",
    "    *           **                                           *    ",
    "   ** **************         **             ****             *    ",
    "   **          *           * *                              I*  * ",
    "   **                                        *                    ",
    "   *****************                         ****                 ",
    "       *************                                              ",
    "     ***************   *   W                                      ",
    "            ** **      **  **                                     ",
    "                      *    **                                     ",
    "  *                  *******                                      ",
    "   *****            **                                      W     ",
    "   ***        **  **          *                            ***    ",
    " **************************************************************** ",
    "   I  **       *           * *                             ***    ",
    " *            *                    ** * * * *       *      ***    ",
    "               *        *                           *       *     ",
    "    *                  ** *                         *    W        ",
    " *  **                  *           *             *               ",
    " *  ****                   *                 *    *          ***  ",
    " *  *******                *                ****  **              ",
    " *  ****                  **                ***   ****            ",
    " *  ***       *         W                   *****     *******     ",
    " **  *        **    *                        ***  ***********     ",
    " **    **                                    ****************     ",
    " **     ** *****       *  *****                 **                ",
    "           *    * ** **    ****                   *               ",
    " ** W****************    * ****                    *      ******* ",
    "                                                                  "];

var map5= ["                                                                 ",
    "                                W                     W          ",
    "         *                                       *               ",
    "   *                    *                            *           ",
    "                                              *                  ",
    "                                                  *        *     ",
    "   *                         W            *         *            ",
    "          *                                    *            *    ",
    "                                      *                      *   ",
    "                                           *                  I  ",
    "         *                             *                       W ",
    "  *            *       *                                         ",
    "                                                                 ",
    "                                                   *             ",
    "    *               **W*************W********             *      ",
    "          *         *                       *                    ",
    "                    *   ******W**********   *                  * ",
    "                    *   *               *   *       *            ",
    "                    *   *   **********  *   W                    ",
    "                    *   W   *        *  *   *                    ",
    "         *          *   *   *        I  *   *                    ",
    "   *                *   *   ******** *  *   *    W               ",
    "                    *   *            *  W   *        *           ",
    "                    *   **************  *   W               ***  ",
    "          *         *                   *   *               **   ",
    "     *              *********************   *        *           ",
    "          *                                 *        *        W  ",
    "  *                                         *        *        *  ",
    "      *       ***W*********W****W****W*******        *******  *  ",
    " o *                                                             ",
    "                                                                 "] ;


var mapa=[  "                                                 ",
    "                                                 ",
    "                                                 ",
    "       **o        ***                **W         ",
    "                  ***                 *          ",
    "                  *              *               ",
    "                  *                     *        ",
    "     *  *                     *   *     *        ",
    "      * *                    **** *              ",
    "      *                                 *        ",
    "                                       **        ",
    "                         **            **        ",
    "                          *                      ",
    "              ** *       ***                     ",
    "              ***                                ",
    "              **                  **             ",
    "       **                         **             ",
    "       **                         *              ",
    "         *            **                         ",
    "                     ***                         ",
    "                    * **                         ",
    "                                                 ",
    "                                                 "];

function obtenerMapa (index )  {
    var mapas = [mapa, map1, map2, map3, map4, map5];
    var m = mapas [index];
    var ret = [];
    for (var i = 0; i < m.length; i++){
      ret[i]=[];
      for (var j = 0; j < m[0].length; j++) {
        ret[i][j] = m[i][j];
      }
    }
    return ret;
}

var indexMap = 0;
var  mapaA = obtenerMapa(indexMap);

var x;
var y;
var contador = 0;
var tablero = document.getElementById('tablero');

function genera(mapaA, imagen) {
  tablero.innerHTML='';
  var tabla = document.createElement('table');
  tabla.setAttribute("class","celda");
  for (var i = 0; i < mapaA.length; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < mapaA[i].length; j++) {
        var celda = document.createElement('td');
        if(mapaA[i][j]=='*'){
          celda.setAttribute("class","pared");
         }else if(mapaA[i][j]=='o'){
            x=i;
            y=j;
          celda.setAttribute("class", imagen);
        } else if (mapaA[i][j]=='W') {
            
          celda.setAttribute("class","final");
        }else{
           celda.setAttribute("class","libre"); 
        }
        
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  tablero.appendChild(tabla);
}

var play = document.getElementById('inicio');
play.onclick = function (){
    var elemento = document.getElementById('global');
    elemento.style.display = 'none';
    
    tablero = document.getElementById('tablero');
    tablero.style.display = 'block';
    
    genera(mapaA,'salida');
    var contador = 1;
        document.addEventListener("keydown", function(e){
            e.preventDefault();
            if(e.keyCode==37){
                mover (0, -1, 'left');    
            }else if(e.keyCode == 40){
                mover (1, 0, 'down');  
            }else if(e.keyCode == 38){
                mover (-1, 0, 'up');  
            } else if(e.keyCode == 39){
                mover (0, 1, 'right');  
            }
    });

}
var time;

function mover (a, b, className){
    
    if (x == 0 || y == 0 || x == mapaA.length - 1 || y == mapaA[0].length) {
        //alert("perdistes");
        mapaA = obtenerMapa(indexMap); 
        genera(mapaA, className);
        clearTimeout(time);
    }
    else if (mapaA[x + a][y + b]=='W') {
        alert("Atrapalo ya!!!");
        indexMap++;
        mapaA = obtenerMapa(indexMap);
        genera(mapaA, 'salida');
        clearTimeout(time);
    }

    else if(mapaA[x+a][y+b]!='*'){
        mapaA[x][y]=' ';
        x+=a;
        y+=b;        
        mapaA[x][y]='o';
        genera(mapaA,className);
        clearTimeout(time);
      }
    time = setTimeout(function(){ mover(a, b, className) }, 100);
}

var instrucc = document.getElementById('instruccion');
instrucc.style.display='none';
var reset = document.getElementById('main');
reset.style.display='none';

var tutorial = document.getElementById('guia').addEventListener('click', function(){
    var elemento1 = document.getElementById('boton');
    elemento1.style.display='none';
    var elemento2 = document.getElementById('instruccion');
    elemento2.style.display='block';
    var reset = document.getElementById('main');
    reset.style.display='block';
});

var credito= document.getElementById('creditos');
credito.style.display='none';

var tutorial = document.getElementById('credito').addEventListener('click', function(){
    var elemento1 = document.getElementById('boton');
    elemento1.style.display='none';
    var elemento2 = document.getElementById('creditos');
    elemento2.style.display='block';
    var reset = document.getElementById('main');
    reset.style.display='block';
});

var reset = document.getElementById('main').addEventListener('click', function(){
    genera(mapaA, className);
});









