/**
 * Created by bopang on 28/05/15.
 */

var Bishop = function(x, y, color, board){
    Piece.call(this, x, y, color, board);
    this.modelUrl = color ? 'Models/White_Bishop.dae': 'Models/Black_Bishop.dae';
    this.updatePosition();
    this.loadModel();
}

Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;