using UnityEngine;

public class ClothController : MonoBehaviour
{
    public Cloth cloth;

    void Start()
    {
        // Set cloth properties
        cloth.useGravity = true;
        cloth.stretchingStiffness = 0.5f;
        cloth.bendingStiffness = 0.5f;
    }
}
